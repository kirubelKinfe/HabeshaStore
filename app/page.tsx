import { Banner, Categories, Featured, Navbar, Footer } from "@components"

const page = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner />
      <Featured />
      <Categories />
      <Footer />
    </div>
  )
}

export default page