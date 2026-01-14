import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

const formSchema = api.contact.submit.input;

export function ContactForm() {
  const submitContact = useSubmitContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    submitContact.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-11">
                      <SelectValue placeholder="Service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0B0F19] border-white/10 text-white">
                    <SelectItem value="podio">Podio Solutions</SelectItem>
                    <SelectItem value="flutterflow">FlutterFlow App</SelectItem>
                    <SelectItem value="retool">Retool Development</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-11">
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#0B0F19] border-white/10 text-white">
                    <SelectItem value="<5k">Less than $5k</SelectItem>
                    <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                    <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                    <SelectItem value="25k+">$25k+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea 
                  placeholder="Message" 
                  className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={submitContact.isPending}
          className="w-full h-11 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all"
        >
          {submitContact.isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>Send Message <Send className="ml-2 h-4 w-4" /></>
          )}
        </Button>
      </form>
    </Form>
  );
}
