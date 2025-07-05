import React from 'react';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './6.jpg';
import img6 from './7.jpg';
import img7 from './8.jpg';
import img8 from './3.jpg';
import Main from './main.jpg';
import img1y from './y1.jpg';
import img2y from './y2.jpg';
import img3y from './y3.jpg';
import img4y from './y4.png';
import Fooder from './food.png'

const contentSections = [
    {
        heading: "Poultry Breeding",
        img: img1,
        content: (
            <p>
                Poultry breeding is done by a wide range of people for diverse end uses and purposes. Poultry breeding can be divided into three main areas which include:
            </p>
        ),
        list: [
            <b key="cb">Commercial breeding:</b>,
            <b key="vb">Village/Backyard breeding:</b>,
            <b key="fb">Fancy/Exhibition breeding:</b>
        ],
        details: [
            "Chicken is by far the most popular poultry species utilised by Australians for both meat and egg production. Breeding for the commercial poultry sector is on a large industrial scale and hatcheries supply both the broiler and layer industries. In Australia, the term “broiler” or “meat chicken” is used by the industry to describe a chicken grown for meat, while the term “layer” is used for chickens grown and maintained for egg production. Chickens are also affectionately referred to as “chooks”. Other poultry species such as Turkeys, Ducks & Geese, and game birds such as Quails are also produced in Australia for meat. Emus and Ostriches are also bred for commercial purposes.",
            "Many farmers and some suburban householders still like to keep their own poultry for egg and meat production. Most of them buy commercial crossbred hens at the point of lay and keep them in semi-intensive conditions in the yard. Some use small colony cages or even use a few layer cages in a protected spot. Others buy day-old chicks and rear their own birds.",
            "There are many breeds of poultry which play very little part in the commercial poultry industry. These are called fancy poultry and are usually kept by small producers (or fanciers) who enjoy breeding, showing and exchanging birds with other fanciers."
        ]
    },
    {
        heading: "Commercial poultry breeding",
        img: img2,
        content: (
            <p>
                The poultry industry breeds chickens destined for both commercial egg and meat production. Geneticists design special breeding programs to select birds with the best characteristics for egg or meat production. This selection process (called genetic selection or genetics) allows the industry to select strains of birds which are produced very efficiently in intensive housing systems. There are two main types of commercial chicken breeds: layers and meat (broiler) chickens.
            </p>
        )
    },
    {
        heading: "Forming an egg",
        img: img3,
        content: (
            <p>
                The hen releases a yolk with the egg cell in it from her ovary where it moves into the oviduct (egg production tube). When a cockerel and a hen are mated, the sperm cells from the cockerel fertilise the egg cell at the top of the oviduct (fertilisation is the joining of the female egg cell with the male sperm cell). The fertilised egg yolk then takes 23-26 hours to pass down the oviduct, during which time layers of egg white (albumen) are laid down. Two layers of egg membranes are then overlaid, and finally the eggshell. If an egg is not fertilised, it still goes through the same process in the oviduct but it will not develop into a chick.
            </p>
        )
    },
    {
        heading: "The Egg & Hatchery",
        img: img4,
        content: (
            <>
                <p>
                    Although the surface of the egg is covered with bacteria, it has its own protective mechanisms in place to prevent the bacteria spoiling the egg. These are:
                </p>
                <ul className="list-disc ml-6 mb-2 marker:text-[#2467aa]">
                    <li>The egg cools off after it is laid and bacteria are less able to grow at lower temperatures.</li>
                    <li>The shell is coated with a fine moist layer called the cuticle, which dries and protects the egg contents from invading bacteria. This also gives a pleasing appearance, or bloom, to the fresh egg.</li>
                    <li>Most eggs are laid in the morning. Eggs are collected as soon as possible after laying and placed in a cool room to help preserve their internal quality. Fertile eggs can be stored for up to 7 days at about 12-15°C without loss of hatchability. Because of the danger of bacteria on egg shells going to the hatchery, all fertile eggs are fumigated on the farm or as soon as they arrive at the hatchery. Fumigation with the gas formaldehyde kills surface bacteria without damaging the fertilised ovum inside the egg.</li>
                </ul>
            </>
        )
    },
    {
        heading: "Hatchery & Incubation",
        img: img5,
        content: (
            <>
                <p>
                    The hatchery is a special building with controlled ventilation. It contains machines for holding and incubating a large number of eggs. The hatchery is designed with hygiene in mind and is laid out so that there is little chance of any contaminating organisms travelling back from hatched chicks to eggs brought in later.
                </p>
                <ul className="list-disc ml-6 mb-2 marker:text-[#2467aa]">
                    <li><b>First Stage of Incubation:</b> The first stage lasts for 18 days and is called “setting”. During setting, the eggs are placed on special trays which can be tilted through 90 degrees, from side to side. The temperature and humidity of the air in the setter is controlled so that conditions inside each egg are suitable for the growth and development of the chick.</li>
                    <li><b>Second Stage of Incubation:</b> On the 18th day, eggs are transferred to a different tray, which cannot be tilted, and placed in another machine called a “hatcher”. Eggs are transferred to hatchers so that hatching chicks do not contaminate other batches of eggs being incubated. The hatchers can then be thoroughly cleaned after every hatch. By the end of the 21st day, all chicks have hatched and are ready to be removed from the machine.</li>
                </ul>
            </>
        )
    },
    {
        heading: "Candling, Sexing & Chick Care",
        img: img6,
        content: (
            <p>
                Candling of eggs is done after 5-8 days of incubation to examine for the presence of any infertile eggs. Sexing allows separation of male and female chicks, usually by visual examination or feather colour. Layer chicks are always sexed, as the females are kept while the males are killed. Meat chickens are normally left unsexed, as both sexes are usually reared together. Some vaccines and procedures like beak trimming or dubbing are also performed in the hatchery to prevent future injuries.
            </p>
        )
    },
    {
        heading: "Chick Requirements & Brooding",
        img: img7,
        content: (
            <p>
                The baby chick must be kept warm as it does not have the ability to maintain a constant body temperature. The chicks are transported in chick boxes which are designed to conserve heat while allowing air movement. When placed on the farm, they must be kept warm and have feed and water available at all times.
            </p>
        )
    },
    {
        heading: "Healthy Chicks",
        img: img8,
        content: (
            <p>
                Healthy chicks add value to the poultry industry and are the result of careful breeding, incubation, and early care.
            </p>
        )
    }
];

const youMayAlsoLike = [
    {
        title: "Nutrition requirements of meat chickens (broilers)",
        img: img1y,
        link: "/nutrition-requirements-broilers"
    },
    {
        title: "Fancy Chicken Breeds",
        img: img2y,
        link: "/fancy-chicken-breeds"
    },
    {
        title: "Biosecurity and Disease Prevention",
        img: img3y,
        link: "/biosecurity-disease-prevention"
    },
    {
        title: "Anatomy and Physiology",
        img: img4y,
        link: "/anatomy-physiology"
    }
];

export default function Poultry_Breeding_Farms() {
    return (
        <div>
            <img src={Main} alt="" className="w-full mb-8" />
            <div className="w-full max-w-7xl  mx-auto py-10 px-4 sm:px-8 ">
                {contentSections.map((section, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-center gap-8 mb-12`}
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                    >
                        {/* Alternate image left/right on desktop */}
                        {idx % 2 === 0 ? (
                            <>
                                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                    <img
                                        src={section.img}
                                        alt={section.heading}
                                        className="w-full max-w-xs rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-2xl font-bold text-[#2467aa] mb-4">{section.heading}</h2>
                                    {section.content}
                                    {section.list && (
                                        <ul className="list-disc ml-6 mb-2 marker:text-[#2467aa]">
                                            {section.list.map((item, i) => (
                                                <li key={i}><b>{item.props.children}</b> {section.details[i]}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-2xl font-bold text-[#2467aa] mb-4">{section.heading}</h2>
                                    {section.content}
                                    {section.list && (
                                        <ul className="list-disc ml-6 mb-2 marker:text-[#2467aa]">
                                            {section.list.map((item, i) => (
                                                <li key={i}><b>{item.props.children}</b> {section.details[i]}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                                    <img
                                        src={section.img}
                                        alt={section.heading}
                                        className="w-full max-w-xs rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}

                {/* You May Also Like Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-[#2467aa] mb-8 text-center" data-aos="fade-up">
                        You May Also Like
                    </h2>
                    <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
                        {youMayAlsoLike.map((item, idx) => (
                            <a
                                key={item.title}
                                href={item.link}
                                className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow group
                                    [perspective:1000px]"
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="w-28 h-28 mb-4 rounded-lg shadow-lg transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-110 group-hover:shadow-2xl [transform-style:preserve-3d]">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <span className="text-lg font-semibold text-center text-[#2467aa] group-hover:underline transition-colors duration-300">{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <img
                src={Fooder}
                alt=""
                className="w-full mt-12"
                data-aos="fade-up"
                data-aos-delay="200"
            />
        </div>
    );
}