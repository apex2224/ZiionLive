import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "./routing/routing";
import Form from './Components/form/Form'
import styles from './App.module.css'
import images from "./assets/images";
import ScrollToTop from "./routing/ScrollonTop";
import FixedForm from './routing/fixedForm'


function App() {
  const [data, setData] = useState("");

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowForm(true);
    }, 200000);
    return () => clearInterval(interval);
  }, []);


  // wtsapp icon //
  const phone = "919878564224"; // ✅ country code + number, only digits
  const text = "Hello! I’d like to know more.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;


  // useEffect(() => {
  //   const handleLoad = () => setLoading(false);

  //   // If page already loaded, hide loader immediately
  //   if (document.readyState === "complete") {
  //     handleLoad();
  //   } else {
  //     window.addEventListener("load", handleLoad);
  //     return () => window.removeEventListener("load", handleLoad);
  //   }
  // }, []);

  return (
    <>
      {/* {loading ? <Loading /> : <Main />} */}

      <div className="App">
        <FixedForm />
        <ScrollToTop />

        {data}
        <Routes>

          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>



        <section className={styles.toolsMain}>
          {/* ✅ Use your existing Form component as popup */}
          {showForm && (
            <div className={styles.formOverlay}>
              <div className={styles.formWrapper}>

                <Form closeForm={() => setShowForm(false)} />
              </div>
            </div>
          )}
        </section>

        <div
          className={styles.wtsapDiv}
          onClick={() => window.open(url, "_blank")}
          role="button"
          aria-label="Chat on WhatsApp"
          title="Any Query"
        >
          <img src={images.whatsappIcon} alt="WhatsApp" className={styles.wtsapImg} />
        </div>
      </div>


    </>
  );
}

export default App;



