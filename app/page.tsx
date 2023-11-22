import { Banner, Categories, Featured, Navbar, Footer } from "@components"

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <Categories />
      <Categories />
      <Footer />
    </div>
  )
}

export default page