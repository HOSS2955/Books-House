import React from "react";
import ReviewContent from "../../../components/client/ui/ReviewHeader/ReviewContent";
import ReviewHeader from "../../../components/client/ui/ReviewHeader/ReviewHeader";

export default function ReviewDetails() {
  const data = {
    src: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Test Title",
    desc: "The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element",
  };
  return (
    <div>
      <ReviewHeader data={data} className="mt-5 pt-5" />
      <ReviewContent />
    </div>
  );
}
