const Partners = () => {
  return (
    <section className="w-full py-6 border-b border-b-gray-300">
      <div className="max-w-6xl mx-auto flex px-6 flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted flex flex-col items-start flex-wrap">
            <span>Discover opportunities</span> 
            <span>with leading companies</span>
        </p>
        <ul className="text-2x font-bold sm:text-3xl text-muted flex items-center gap-8 justify-between flex-wrap">
          <li>Safaricom</li>
          <li>flutterwaves<span className="text-brand">✳</span></li>
          <li>andela</li>
          <li>Bolt</li>
          <li>M-KOPA</li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
