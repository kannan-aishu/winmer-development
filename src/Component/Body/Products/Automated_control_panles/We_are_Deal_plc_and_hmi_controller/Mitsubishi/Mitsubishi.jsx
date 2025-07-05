import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Example images (replace with your own Mitsubishi PLC images)
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.jpg';
import Img4 from './4.jpg';
import Img5 from './5.jpg';

const mitsubishiSections = [
	{
		title: 'Mitsubishi Electric PLC Overview',
		content:
			'Mitsubishi Electric’s controller line is one of the widest in the industry. Our offering spans from our Alpha Simple Application Controller with as little as six I/O points, all the way to the high-end Q Series Automation Platform capable of running entire plants with thousands of I/O. Our controllers are complemented by a comprehensive array of software tools and networking technologies. Offering seamless integration to our other automation products such as VFDs, motion control and HMIs, to provide a comprehensive solution with the controller at the center.',
		img: Img1,
		imgLeft: true,
	},
	{
		title: 'iQ-F PLC',
		content:
			'The Mitsubishi Electric MELSEC-F series has undergone many advancements, making way for the next generation MELSEC iQ-F Series, with enhanced high speed bus, expanded built-in functions, advanced SSCNET III/H support, and improved engineering environment with parameter settings in GX Works3 engineering software. From standalone use to networked system application, MELSEC iQ-F takes your business to the next level.',
		img: Img2,
		imgLeft: false,
	},
	{
		title: 'iQ-R PLC',
		content:
			'The iQ-R Series is the newest programmable automation controller to join the iQ Platform. The design of the iQ-R is focused on optimizing automation systems to produce innovative and high value products. Regardless of industry or application, all automation plant floors face the basic challenges of reducing life cycle costs and perfecting competitive advantages. As part of the iQ Platform, the iQ-R will directly address these needs, from initial specification and design of the control system, through programming and subsequent installation, all the way to ongoing operation, maintenance, and upgrades.',
		img: Img3,
		imgLeft: true,
	},
	{
		title: 'iQ PLC',
		content:
			'The iQ Platform unifies all of the Mitsubishi Electric automation disciplines into a one-of-a-kind modular Programmable Automation Controller (PAC). The iQ Platform is the only PAC capable of integrating individual Sequence, Motion, CNC, and Robot control onto a single back-plane rack. Based on the multi-CPU architecture of the renowned Q Series Automation Platform, the key to this multi-discipline functionality is the CPU-only data bus on all Q3*DB base units. This secondary bus facilitates a large high-speed shared memory area between up to 4 CPUs, each controlling different aspects of the automation system. Each CPU then shares its working data at an almost instantaneous refresh rate between all CPUs in the configuration. This design makes the iQ Platform ideal for multi-discipline systems.',
		img: Img4,
		imgLeft: false,
	},
	{
		title: 'L Series PLC',
		content:
			'The L Series is Mitsubishi’s newest controller line, donning an innovative and easy-to-expand rack-free design. The single-CPU architecture includes built-in Ethernet and Mini-USB interfaces, a SD/SDHC memory card slot for program storage and data logging, and 24 I/O for positioning and high-speed counter functions. The enhanced CPU also includes a CC-Link V2 Master/Local station for connection to the powerful open field network. All other power supply, extension I/O, motion, positioning, high-speed counter, serial communication, and networking module options are added on as necessary. Accessories include a two-color illuminated display unit for monitoring and troubleshooting, and a bus end-cover with error terminal relay. The compact size, easy expandability, networking capabilities, and multitude of built-in high-powered functions makes the L Series ideal for both stand-alone machines as well as networked stations in larger applications. The L Series is fully supported by iQ Works software suite, which brings all the benefits of MELSOFT Navigator network configuration setup, System Label and structured programming, and dedicated GOT screens for troubleshooting and maintenance.',
		img: Img5,
		imgLeft: true,
	},
];

export default function Mitsubishi() {
	useEffect(() => {
		AOS.init({
			duration: 900,
			once: false,
			easing: 'ease-in-out',
			offset: 60,
		});
	}, []);

	return (
		<div className="bg-gradient-to-br from-white via-red-50 to-gray-100 min-h-screen py-10 px-2 md:px-4">
			<div className="max-w-5xl mx-auto flex flex-col gap-14">
				<h1
					className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-8 text-center tracking-tight drop-shadow-lg"
					data-aos="fade-down"
				>
					Mitsubishi Electric PLCs
				</h1>
				{mitsubishiSections.map((section, idx) => (
					<div
						key={idx}
						className={`flex flex-col md:flex-row items-center gap-8 bg-white/95 rounded-3xl shadow-2xl p-8 border border-red-100
              ${section.imgLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
						data-aos="fade-up"
						data-aos-delay={idx * 180}
					>
						<div className="w-full md:w-1/3 flex-shrink-0">
							<img
								src={section.img}
								alt={section.title}
								className="rounded-2xl shadow-lg object-cover object-center w-full h-56 md:h-64 transition-transform duration-500 hover:scale-105"
								data-aos="zoom-in"
								data-aos-delay={idx * 180 + 100}
							/>
						</div>
						<div className="flex-1">
							<h2
								className="text-2xl md:text-3xl font-bold text-blue-700 mb-3 tracking-tight"
								data-aos="fade-right"
								data-aos-delay={idx * 180 + 80}
							>
								{section.title}
							</h2>
							<p
								className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed"
								data-aos="fade-left"
								data-aos-delay={idx * 180 + 120}
							>
								{section.content}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Extra content at the end */}
			<div
				className="bg-white/95 rounded-2xl shadow-xl p-8 mt-10 border border-blue-100 max-w-4xl mx-auto"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				<h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">
					Conclusion
				</h2>
				<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
					Mitsubishi Electric PLCs offer a comprehensive range of automation
					solutions, from compact controllers for simple applications to advanced
					platforms capable of managing entire plants. Their modularity,
					networking capabilities, and integration with other Mitsubishi automation
					products make them a reliable choice for industries worldwide. With
					robust software support and a focus on innovation, Mitsubishi PLCs help
					businesses achieve efficient, scalable, and future-ready automation.
				</p>
				<p className="text-gray-700 text-base md:text-lg leading-relaxed">
					Whether you are upgrading an existing system or designing a new automation
					project, Mitsubishi PLCs provide the flexibility, performance, and support
					needed for success in modern industrial environments.
				</p>
			</div>
		</div>
	);
}