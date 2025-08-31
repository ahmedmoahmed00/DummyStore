import useCounterAnimation from "../hooks/useCounterAnimation";
import { useInView } from "../hooks/useInView";

function SummaryBox({ count, desc, children }) {
  const { ref, visible } = useInView();

  const Million = 1000000;
  const halfMillion = 500000;

  const CounterAnimation = useCounterAnimation(count, 1500);

  return (
    <div ref={ref} className="text-center">
      {children}
      <h2
        className={`${
          visible ? " translate-y-0 opacity-100 " : " translate-y-10 opacity-0 "
        } text-3xl font-bold text-gray-900 transition-all duration-700 ease-out `}
      >
        {CounterAnimation >= Million
          ? `${CounterAnimation.toString().slice(0, 1)}M`
          : CounterAnimation >= halfMillion
          ? `${CounterAnimation.toString().slice(0, 3)}K`
          : CounterAnimation}
        +
      </h2>
      <p
        className={`${
          visible
            ? "translate-y-0 opacity-100 transition-all duration-700 delay-100"
            : "translate-y-10 opacity-0"
        } text-gray-600`}
      >
        {desc}
      </p>
    </div>
  );
}

export default SummaryBox;
