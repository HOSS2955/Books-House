import React from "react";
import ClientsTestmonialsSwiper from "../../../components/client/ui/swiper/ClientsTestimonials";

export default function ClientsTestimonials({ clientsTestimonialsArray }) {
  return (
    <div className="container">
      <section className="section bg-white">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8 mb-4">
            <div className="title text-center">
              <h1 className="fw-semibold">Client’s Testmonials</h1>
              <p className="text-muted text-sm">
                It is very easy to start smoking but it is an uphill task to
                quit it. Ask any chain smoker or even a person.
              </p>
            </div>
          </div>
        </div>
        <ClientsTestmonialsSwiper
          clientsTestimonialsArray={clientsTestimonialsArray}
        />
      </section>
    </div>
  );
}
