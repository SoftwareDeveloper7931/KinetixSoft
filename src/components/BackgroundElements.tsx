export function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(74,95,189,0.08) 0%, transparent 50%)" }}
      />
    </div>
  );
}
