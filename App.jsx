import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceProviders from "./components/ServiceProviders";
import ServiceCardGrid from "./components/ServiceCardGrid";
import ImagesSection from "./components/ImageSection";
import UpdatesSection from "./components/UpdatesSection";

function App() {
  return (
    <div className="font-sans w-full bg-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <ServiceProviders />
        <div className="bg-white">
          <ServiceCardGrid />
        </div>
      </main>
      <div className="mt-[39px]">
          <ImagesSection />
        </div>
      <div className="mt-[9px]">
          <UpdatesSection/>
        </div>
      <div className="mt-[59px]">
          <Footer/>
        </div>
      
    </div>
  );
}

export default App;