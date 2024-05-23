import React from "react";
import Navigation from "./components/navigation/Navigation";
import ContactHeader from "./components/contactHeader/ContactHeader";
import ContactForm from "./components/contactform/ContactForm";
// import Button from "./components/button/Button";
// import

const App = () => {
  return (
    <div>
      <Navigation />
      <ContactHeader/>
      <ContactForm/>
    </div>
  );
};

export default App;
