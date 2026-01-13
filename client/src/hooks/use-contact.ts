import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Validate with Zod before sending (double check)
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
           const errorData = await res.json();
           throw new Error(errorData.message || "Validation failed");
        }
        throw new Error("Failed to submit contact form");
      }

      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
        className: "bg-green-500/10 border-green-500/20 text-green-100",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
