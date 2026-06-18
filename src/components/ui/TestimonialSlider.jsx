import {
  useEffect,
  useState,
} from "react";

export default function TestimonialSlider({
  testimonials,
}) {
  const [current, setCurrent] =
    useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) %
          testimonials.length
      );
    }, 5000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto text-center">
      <p className="text-lg">
        "
        {
          testimonials[current]
            .message
        }
        "
      </p>

      <h4 className="mt-4 font-semibold">
        {
          testimonials[current]
            .name
        }
      </h4>
    </div>
  );
}