import React from "react";
import Accordion from "./Accordion";

const FaqContent = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 rounded-lg md:py-12">
      <Accordion
        title="How do I order for a ride?"
        answer="Kindly download the Ridesmash app from the iOS or google stores, sign up and start ordering for rides."
      />
      <Accordion
        title="Which country does Ridesmash operate in?"
        answer="Ridesmash operates in Nigeria and Ghana presently and plans to spread across 40 different countries in Africa."
      />
      <Accordion
        title="Can I book for a ride ahead?"
        answer="Yes, you can book ahead."
      />

     <Accordion
        title="How are the fares calculated?"
        answer="Fares are calculated per trip."
      />
      <Accordion
        title="Is there a monthly or weekly subscription option?"
        answer="No."
      />
      <Accordion
        title="How do I pay on Ridesmash?"
        answer="You can pay using wallet, cash, card and transfer."
      />

      <Accordion
        title="How do I become a driver?"
        answer="Join the community of drivers enjoying pension and early payments on our website or via the Ridesmash app."
      />
      <Accordion
        title="What are the requirements to become a driver?"
        answer="To become a SmashDriver, you must have a driving license, at least 2 years of driving experience, produce 2 guarantors, and must attend and complete our Drivers Training and Induction."
      />
      <Accordion
        title="How many cars can I register on Ridesmash?"
        answer="With Ridesmash, you can register as many cars as you have."
      />

      <Accordion
        title="Does it matter if I use other e-hailing apps?"
        answer="It doesn’t matter if you ride for another e-hailing app, the benefits will help you discern."
      />
      <Accordion
        title="Can Ridesmash lease me a car?"
        answer="With our hire purchase scheme, you get to own and drive a car of your choice with only a 25% down payment. Register now at lease@ridesmash.com"
      />
      <Accordion
        title="Where can I get further information?"
        answer="Should you require further information please contact us at info@ridesmash.com"
      />

      
    </div>
  );
};

export default FaqContent;