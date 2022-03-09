import img0 from "../assets/drew.webp";

export default function About() {

    return (
        <main className="flex items-center">
            <div className="flex flex-col items-center my-10 ">
                <div className="flex flex-col items-center justify-center w-6/12 p-5 rounded-2xl bg-gradient">


                    <img src={img0} alt="A picture of Drew" className="rounded-2xl mb-5" />
                    <p className="text-xl font-logo dark:text-white text-black text-center">
                        I am a full stack developer experienced in <a className="text-blue-500 font-bold">React</a>, <a className="text-green-500 font-bold">Node</a>, <a className="text-emerald-500 font-bold" >Express</a>, and <a className="text-orange-500 font-bold">Firebase</a>. I have a passion for learning new technologies and building applications.
                    </p>
                </div>

            </div>

        </main>


    );

}

