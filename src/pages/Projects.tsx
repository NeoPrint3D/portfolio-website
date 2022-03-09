import neo_svg from "../assets/neo_svg.png"
import lcgames from "../assets/lcgames.png"


interface Props {

    title: string,
    description: string,
    link: string,
    image: string

}


function Projects() {

    return (
        <main className="flex flex-col items-center ">
            <ProjectCard 
                title="Neo-SVG"
                description="A cool webiste to share your favorite SVG images for creators."
                link="https://neo-svg.web.app/"
                image={neo_svg}
            />

            <ProjectCard 
                title="Lake Creek Games"
                description="A website to host games for Lake Creek High School."
                link="https://lake-creek-games.web.app/"
                image={lcgames}
            />


        </main>
    )
}




function ProjectCard(props: Props) {
    const { title, description, link, image } = props;

    return (
    <div className=" grid grid-cols-2 bg-gradient  my-14 w-3/4 h-60  rounded-3xl">
        <div
            className="flex justify-center items-center rounded-l-3xl "
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}>
            <div className="flex justify-center items-center bg-primary-white/75 dark:bg-gray-900/75 p-2 rounded-full">
                <a href={link}
                    //open a new tab
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gradient-primary  text-center ">
                    {title}
                </a>
            </div>
        </div>
        <div className="flex justify-center ml-5 items-center">
            <p className="text-xl font-semibold  text-black dark:text-white">
                {description}
            </p>
        </div>
    </div>)
}

export default Projects