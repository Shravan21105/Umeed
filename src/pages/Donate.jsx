import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import qrImage from "../assets/images/QR.jpg";
import { AnimatePresence } from "framer-motion";


const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [donationType, setDonationType] = useState("Select");
  const [address, setAddress] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  useEffect(() => {
    console.log("QR Code Show State:", showQR);
  }, [showQR]);


  const sendEmail = () => {
    const templateParams = {
      donor_name: name || "Anonymous",
      email: email,
      contact_no: phone,
      donation_type: donationType,
      amount: donationType === "Money" ? amount : "N/A",
      address: donationType !== "Money" ? address : "N/A",
    };
  
    emailjs
      .send("service_cwcf328", "template_9dioe4q", templateParams, "YiIghRhGE-nY8toQi")
      .then(
        (response) => {
          console.log("✅ Email Sent:", response);
          setThankYouMessage("🎉 Thank you for your donation! ❤️");
  
          setTimeout(() => setThankYouMessage(""), 5000);
          resetForm();
        },
        (error) => {
          console.error("❌ Email Failed:", error);
          setThankYouMessage("❌ Failed to send email. Try again.");
          
          setTimeout(() => setThankYouMessage(""), 5000);
        }
      );
  };
  

  const handleShowQR = (e) => {
    e.preventDefault();
    console.log("Donation Type Selected:", donationType);

    if (donationType === "Money") {
      setShowQR(true);
      console.log("QR Code should show now");
    } else {
      sendEmail();
    }
  };

  const handlePaymentDone = () => {
    setShowQR(false);
    sendEmail();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAmount("");
    setDonationType("Select");
    setAddress("");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white pt-2 pb-6">
      <motion.h1
        className="text-3xl font-bold mb-4 mt-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support Our Cause ❤️
      </motion.h1>

      <motion.form
        onSubmit={handleShowQR}
        className="border border-blue-200 dark:border-gray-600 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
            {thankYouMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-center font-semibold text-lg text-blue-600 dark:text-blue-400"
              >
                {thankYouMessage}
              </motion.div>
            )}
          </AnimatePresence>


        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Donation Type</label>
          <select
            value={donationType}
            onChange={(e) => setDonationType(e.target.value)}
            className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
          >
            <option value="Select" disabled>Select</option>
            <option value="Money">Money</option>
            <option value="Clothes">Clothes</option>
            <option value="Toys">Toys</option>
            <option value="Books">Books</option>
          </select>
        </div>

        {donationType === "Money" && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
              placeholder="Enter donation amount"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Your Name (Optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Contact Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
            required
            placeholder="Enter your contact number"
          />
        </div>

        {donationType !== "Money" && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Pickup Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border text-black bg-white dark:text-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 rounded-md focus:ring focus:ring-blue-400"
              required
              placeholder="Enter pickup address"
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition-all"
        >
          {donationType === "Money" ? "Show QR Code" : "Submit Donation"}
        </motion.button>

        {showQR && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={() => setShowQR(false)} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center relative"
              onClick={(e) => e.stopPropagation()} 
              initial={{ scale: 0.5, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.3, ease: "easeOut" }} 
            >
              <p className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Scan the QR Code to Donate
              </p>
              <img
                src={qrImage}
                alt="QR Code"
                className="w-80 h-180 mx-auto rounded-lg shadow-lg" 
              />

              <button
                onClick={handlePaymentDone}
                className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition-all text-lg"
              >
                Payment Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default Donate;
