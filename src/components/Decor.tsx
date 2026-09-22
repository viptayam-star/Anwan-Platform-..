export function Decor() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full animate-glow"></div>
          <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-blue-600/15 rounded-full animate-glow" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full animate-glow" style={{ animationDelay: '4s' }}></div>
        </div>

  
    </>
  );
}
