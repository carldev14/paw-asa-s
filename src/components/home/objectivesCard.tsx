import { fontHeader } from "@/utils/fonts"


export default function ObjectivesCard() {
  const objectives = [

    {
      title: "Facilitated a donation program within the shelter on Day 1",
      items: [
        "Coordinate with the shelter to organize scheduled feeding times.",
        "Ensure proper nutrition for stray animals housed within the facility."
      ]
    },
    {
      title: "Supporting San Pedro Animal Shelter & Paw-asa Through Community Engagement",
      items: [
        "Products for Sale: Pastillas , chocolate dipped marsmallows, Strawberry/Green Apple/ Blue Lemonaded Flavored Fruit Soda and Musubi. ",
        "Purpose: Proceeds will go to San Pedro Animal Shelter for the care and food of rescued animals.",
        "Duration: The fundraising event will run for 3 weeks, maximizing sales and engagement."
      ]
    },
    {
      title: "Promote the animal shelter to increase awareness and encourage donations",
      items: [
        "Create a Facebook Page to establish an online presence, share updates, success stories, and adoption opportunities.",
        "Encourage donations by showcasing the shelter's needs and motivating people to contribute.",
        "Promote the page by asking people to like and share, expanding its reach and attracting more supporters."
      ]
    }]
  return (

    <section className="p-8 w-full flex flex-col gap-14">
      <h2 className={`${fontHeader.className} text-2xl font-semibold text-white text-center`}>- Our objectives -</h2>
      <div className="grid col-span-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-white">

        {objectives.map((field, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">

            <label className="text-2xl w-fit rounded-full border-white border text-center p-4">
              {index + 1}
            </label>
            <h3 className="text-xl md:text-2xl text-center">{field.title}</h3>
            <ul className="text-white/80 ">
              {
                field.items.map((obj, index) => (
                  <li key={index} className="text-lg text-center">
                    {obj}
                  </li>
                ))
              }
            </ul>
          </div>
        )
        )}        </div>
    </section>
  )


}
