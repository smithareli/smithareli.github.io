import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-j0nnrvva9c";
import bgPixels from "./imports/Desktop1/e28149077e9535146ca64526f9a428e4a5d94246.png";
import imgPortrait from "./imports/Desktop1/8f09e75acb66ae7e94d2162cbbcc72762006da37.png";
import imgSprite from "./imports/Desktop1/709a85981e539f81d46eda2ada7b40527213712a.png";
import imgAboutMe from "./imports/Desktop1/a71a64a90391cfe8de2f81929ad584c58f22e23c.png";
import imgDatabase from "./imports/Desktop1/37367db7889321f424ea4034846be8ac17aca22c.png";
import imgCode from "./imports/Desktop1/bce9414e7ba08ddddae91109df673af5fd77183c.png";
import imgCodeBranch from "./imports/Desktop1/af1fb2789500ee195797789f2a3270254f8f5312.png";
import imgEnvelope from "./imports/Desktop1/769e013d0ad1da6d4fe2e444ffe9fd41044a4d9c.png";
import imgLinkedin from "./imports/Desktop1/f5e6b260ae4c696c038940b70c35f3bc911e30c1.png";
import imgPhone from "./imports/Desktop1/03519eb0b2fb52f54b4573295f7ad5cab6b7a434.png";

const FULL_TEXT = "I'm Areli Smith";

// Nav underline positions per active section (matches original line position under HOME)
const NAV_LINES: Record<string, { left: number; width: number }> = {
  home:    { left: 598,  width: 125 },
  about:   { left: 768,  width: 218 },
  work:    { left: 1011, width: 105 },
  contact: { left: 1183, width: 168 },
};

type Project = {
  key: string;
  name: string;
  nameLeft: number; nameTop: number;
  linkLeft: number; linkTop: number;
  linkIconLeft: number; linkIconTop: number;
  cardLeft: number; cardTop: number;
  techStack: string;
  description: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    key: "shelf-talk",
    name: "Shelf Talk",
    nameLeft: 237, nameTop: 1825,
    linkLeft: 213, linkTop: 1860,
    linkIconLeft: 332, linkIconTop: 1861,
    cardLeft: 111, cardTop: 1529,
    techStack: "Tech Stack: React | JavaScript | CSS",
    description: "A reading tracker and book discussion platform built for book lovers to catalog reads, write reviews, and connect with readers.",
    link: "#",
  },
  {
    key: "swamp-princess",
    name: "Swamp Princess",
    nameLeft: 638, nameTop: 1820,
    linkLeft: 648, linkTop: 1859,
    linkIconLeft: 767, linkIconTop: 1860,
    cardLeft: 543, cardTop: 1529,
    techStack: "Tech Stack: React | TypeScript | CSS",
    description: "A whimsical interactive experience inspired by Florida folklore, featuring animated storytelling and custom pixel art.",
    link: "#",
  },
  {
    key: "nonnas-recipes",
    name: "Nonna's Recipes",
    nameLeft: 1068, nameTop: 1820,
    linkLeft: 1077, linkTop: 1858,
    linkIconLeft: 1196, linkIconTop: 1859,
    cardLeft: 974, cardTop: 1529,
    techStack: "Tech Stack: JavaScript | HTML | CSS",
    description: "A family recipe archive with a clean nostalgic UI for browsing, searching, and saving generational recipes.",
    link: "#",
  },
  {
    key: "duckie",
    name: "Duckie AIventure",
    nameLeft: 200, nameTop: 2224,
    linkLeft: 213, linkTop: 2259,
    linkIconLeft: 332, linkIconTop: 2260,
    cardLeft: 111, cardTop: 1928,
    techStack: "Tech Stack: React Native | Expo | JavaScript",
    description: "A mobile app guiding kids through AI-themed adventures with interactive challenges and a rubber duck companion.",
    link: "#",
  },
  {
    key: "harn",
    name: "Harn Museum Exhibit",
    nameLeft: 615, nameTop: 2224,
    linkLeft: 648, linkTop: 2259,
    linkIconLeft: 767, linkIconTop: 2260,
    cardLeft: 543, cardTop: 1928,
    techStack: "Tech Stack: React | Figma | CSS",
    description: "An interactive digital exhibit companion for the Harn Museum of Art to explore collections and artist stories.",
    link: "#",
  },
  {
    key: "eatsy",
    name: "Eatsy Peatsy",
    nameLeft: 1086, nameTop: 2224,
    linkLeft: 1074, linkTop: 2257,
    linkIconLeft: 1193, linkIconTop: 2258,
    cardLeft: 975, cardTop: 1928,
    techStack: "Tech Stack: React | Firebase | TypeScript",
    description: "A meal-planning and grocery list app with smart suggestions and a clean interface for healthy eating.",
    link: "#",
  },
];

// ─── Shared SVG icons ────────────────────────────────────────────────────────

function CheckSvg() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="9.4" preserveAspectRatio="none" viewBox="0 0 12 9.4" width="12">
      <path d={svgPaths.p35d39780} fill="#8D2B59" />
    </svg>
  );
}

function LinkSvg() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 20 10" width="20">
      <path d={svgPaths.p8e41c80} fill="#8D2B59" />
    </svg>
  );
}

// ─── Desktop: portfolio card with hover overlay ──────────────────────────────

function DesktopCard({ p }: { p: Project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* Image card */}
      <div
        className="absolute h-[285px] w-[347px] overflow-hidden"
        style={{ left: p.cardLeft, top: p.cardTop }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute bg-[#d9d9d9] inset-0" />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0, pointerEvents: hovered ? "auto" : "none" }}
        >
          <div className="absolute inset-[0.35%_0_-0.35%_0.58%]">
            <svg className="absolute block inset-0 size-full" fill="none" height="285" preserveAspectRatio="none" viewBox="0 0 345 285" width="345">
              <path d="M0 0H345V285H0V0Z" fill="#757575" opacity="0.5" />
            </svg>
          </div>
          <div className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold inset-[5.61%_4.03%_9.47%_4.03%] leading-[0] not-italic text-[20px] text-black overflow-hidden">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] mb-2">{p.techStack}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal]">{p.description}</p>
          </div>
        </div>
      </div>
      {/* Project name */}
      <p
        className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#492134] text-[20px] whitespace-nowrap"
        style={{ left: p.nameLeft, top: p.nameTop }}
      >
        {p.name}
      </p>
      {/* "Project Link" text */}
      <p
        className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#492134] text-[20px] whitespace-nowrap"
        style={{ left: p.linkLeft, top: p.linkTop }}
      >
        {`Project Link `}
      </p>
      {/* Link icon */}
      <div className="absolute overflow-clip size-[24px]" style={{ left: p.linkIconLeft, top: p.linkIconTop }}>
        <div className="absolute inset-[29.17%_8.33%]">
          <LinkSvg />
        </div>
      </div>
    </>
  );
}

// ─── Desktop: animated bullet wrapper ────────────────────────────────────────

function DesktopBullet({
  wLeft, wTop,
  boxRelTop, iconRelTop,
  textRelLeft, textRelTop, textWidth, textHeight,
  text, whitespace, visible, delay,
}: {
  wLeft: number; wTop: number;
  boxRelTop: number; iconRelTop: number;
  textRelLeft: number; textRelTop: number; textWidth: number; textHeight: number;
  text: string; whitespace?: string; visible: boolean; delay: number;
}) {
  return (
    <div
      className="absolute float-item"
      style={{
        left: wLeft,
        top: wTop,
        width: textRelLeft + textWidth,
        height: textRelTop + textHeight,
        animation: visible ? `floatUp 0.55s ease ${delay}s forwards` : "none",
      }}
    >
      <div className="absolute border-2 border-[#492134] border-solid size-[29px]" style={{ left: 0, top: boxRelTop }} />
      <div className="absolute overflow-clip size-[24px]" style={{ left: 3, top: iconRelTop }}>
        <div className="absolute bottom-[31.67%] left-1/4 right-1/4 top-[29.17%]">
          <CheckSvg />
        </div>
      </div>
      <p
        className={`[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#492134] text-[20px] ${whitespace ?? ""}`}
        style={{ left: textRelLeft, top: textRelTop, width: textWidth, height: textHeight }}
      >
        {text}
      </p>
    </div>
  );
}

// ─── Desktop page: exact 1440px absolute layout ──────────────────────────────

function DesktopPage({
  activeSection, typedText, typingDone, floatVisible,
  onNavClick,
}: {
  activeSection: string;
  typedText: string;
  typingDone: boolean;
  floatVisible: boolean;
  onNavClick: (id: string) => void;
}) {
  const line = NAV_LINES[activeSection] ?? NAV_LINES.home;

  return (
    <div
      className="relative"
      style={{
        minHeight: "3200px",
        minWidth: "1440px",
        background: "linear-gradient(to bottom, #af507d 0%, #f1f798 62.5%, #8d2b59 100%)",
      }}
    >
      {/* ── Sticky Navbar ── */}
      <nav
        className="sticky top-0 z-50 bg-[#8d2b59]"
        style={{ height: 48, minWidth: "1440px" }}
      >
        <div className="relative h-full" style={{ width: 1440 }}>
          <p className="[word-break:break-word] absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[111px] not-italic text-[#f2d6e3] text-[30px] top-[6px] whitespace-nowrap">
            ARELI SMITH
          </p>
          {[
            { id: "home",    label: "HOME",     left: 614  },
            { id: "about",   label: "ABOUT ME", left: 786  },
            { id: "work",    label: "WORK",     left: 1027 },
            { id: "contact", label: "CONTACT",  left: 1201 },
          ].map(({ id, label, left }) => (
            <button
              key={id}
              onClick={() => onNavClick(id)}
              className="[word-break:break-word] absolute block cursor-pointer font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic text-[#f2d6e3] text-[30px] text-left top-[6px] whitespace-nowrap"
              style={{ left }}
            >
              <p className="leading-[normal]">{label}</p>
            </button>
          ))}
          {/* Active underline — moves via transition */}
          <div
            className="absolute"
            style={{
              left: line.left,
              top: 50,
              width: line.width,
              transition: "left 0.3s ease, width 0.3s ease",
            }}
          >
            <div className="relative" style={{ height: "1.016px" }}>
              <div className="absolute" style={{ inset: "-6px 0 0 0" }}>
                <svg fill="none" height="6" preserveAspectRatio="none" viewBox={`0 0 ${line.width} 6`} width={line.width}>
                  <line stroke="#F1F798" strokeLinecap="round" strokeWidth="6" x1="3" x2={line.width - 3} y1="3" y2="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Background Pixels ── */}
      <div className="absolute contents left-[70px] top-[67px]">
        {[67, 914, 1829].map((top) => (
          <div key={top} className="absolute h-[767px] left-[84px] w-[1309px]" style={{ top }}>
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-50 pointer-events-none size-full" src={bgPixels} />
          </div>
        ))}
        <div className="absolute h-[325px] left-[70px] top-[2608px] w-[1309px]">
          <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[236.02%] left-0 max-w-none top-[-0.01%] w-full" src={bgPixels} />
          </div>
        </div>
      </div>

      {/* ── Home Section ── */}
      {/* "Hello!" */}
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[127px] not-italic text-[#492134] text-[30px] top-[135px] whitespace-nowrap">Hello!</p>
      {/* Yellow line under Hello */}
      <div className="absolute h-0 left-[128px] top-[175px] w-[50px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg fill="none" height="3" preserveAspectRatio="none" viewBox="0 0 50 3" width="50">
            <line stroke="#CFD746" strokeWidth="3" x2="50" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      {/* Typing text + inline cursor */}
      <div className="absolute flex items-center left-[128px] top-[194px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold not-italic text-[#492134] text-[30px] leading-normal whitespace-nowrap">
          {typedText}
        </span>
        <span
          className={`inline-block flex-shrink-0 bg-[#F1F798] ml-[2px] ${typingDone ? "cursor-blink" : ""}`}
          style={{ width: 7, height: 34 }}
        />
      </div>
      {/* Box offset border */}
      <div className="absolute border border-[#492134] border-solid h-[64px] left-[111px] top-[258px] w-[363px]" />
      {/* Resume button offset border */}
      <div className="absolute border border-[#492134] border-solid h-[39px] left-[206px] top-[430px] w-[157px]" />
      {/* Dark box */}
      <div className="absolute bg-[#492134] h-[64px] left-[122px] top-[249px] w-[363px]" />
      {/* Box text */}
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[50px] leading-[normal] left-[133px] not-italic text-[#fcfee0] text-[20px] top-[256px] w-[341px]">Computer Science Student Minoring in Digital Arts and Science</p>
      {/* Ghost subtitle */}
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[50px] leading-[normal] left-[122px] not-italic text-[#492134] text-[20px] top-[350px] w-[341px]">Computer Science Student Minoring in Digital Arts and Science</p>
      {/* Resume button */}
      <div className="absolute cursor-pointer h-[39px] left-[212px] top-[422px] w-[158px]">
        <div className="absolute inset-0 bg-[#fdf2c0]" />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[251px] not-italic text-[#492134] text-[20px] top-[430px] whitespace-nowrap">RESUME</p>
      {/* Portrait */}
      <div className="absolute flex h-[131.052px] items-center justify-center left-[425px] top-[263px] w-[125.752px]">
        <div className="flex-none rotate-[-12.63deg]">
          <div className="h-[111px] relative w-[104px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPortrait} />
          </div>
        </div>
      </div>
      {/* Corner bracket (Group / home bottom right) */}
      <div className="absolute flex items-center justify-center left-[819px] size-[66px] top-[460px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[66px]">
            <div className="absolute inset-[0_-3.03%_0_0]">
              <svg fill="none" height="66" preserveAspectRatio="none" viewBox="0 0 68 66" width="68">
                <line stroke="#F1F798" strokeWidth="2" x2="66" y1="2" y2="2" />
                <line stroke="#F1F798" strokeWidth="2" x1="67" x2="67" y1="4.37114e-08" y2="66" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Sprite */}
      <div className="absolute flex h-[381px] items-center justify-center left-[831px] top-[124px] w-[392px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[381px] relative w-[392px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[115.75%] left-[-11.48%] max-w-none top-0 w-[450%]" src={imgSprite} />
            </div>
          </div>
        </div>
      </div>
      {/* Divider Home→About */}
      <div className="absolute h-0 left-[248px] top-[601px] w-[943px]">
        <div className="absolute inset-[-4px_0_0_0]">
          <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 943 4" width="943">
            <line stroke="#F7D698" strokeWidth="4" x2="943" y1="2" y2="2" />
          </svg>
        </div>
      </div>

      {/* ── About Me Section ── */}
      {/* Heading */}
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[661px] not-italic text-[#492134] text-[36px] top-[675px] whitespace-nowrap">About Me!</p>
      {/* Yellow underline */}
      <div className="absolute flex h-[2px] items-center justify-center left-[662px] top-[733px] w-[124px]">
        <div className="flex-none rotate-[-0.92deg]">
          <div className="h-0 relative w-[124.016px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 124.016 4" width="124.016">
                <line stroke="#F1F798" strokeWidth="4" x2="124.016" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Corner bracket (Group1) */}
      <div className="absolute left-[1223px] size-[66px] top-[739px]">
        <div className="absolute inset-[0_-3.03%_0_0]">
          <svg fill="none" height="66" preserveAspectRatio="none" viewBox="0 0 68 66" width="68">
            <line stroke="#F1F798" strokeWidth="2" x2="66" y1="2" y2="2" />
            <line stroke="#F1F798" strokeWidth="2" x1="67" x2="67" y1="4.37114e-08" y2="66" />
          </svg>
        </div>
      </div>
      {/* Gray photo bg */}
      <div className="absolute bg-[#d9d9d9] h-[547px] left-[111px] top-[675px] w-[502px]" />
      {/* Bio */}
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold h-[191px] leading-[normal] left-[663px] not-italic text-[#492134] text-[20px] top-[762px] w-[595px]">{`I'm a front‑end developer and Computer Science major at the University of Florida with a strong focus on building interactive, user‑centered interfaces. I love creating clean, intuitive designs and refining UI experiences through collaboration, feedback, and real‑world engineering practices. I'm currently pursuing software engineering internships where I can contribute, learn from mentors, and continue growing as a developer.`}</p>

      {/* Animated floating bullets — Group2 first, Group3 second, Group4 third */}
      {/* Group2: box(717,994) icon(720,996) text(761,996 h53 w462) */}
      <DesktopBullet
        wLeft={717} wTop={994}
        boxRelTop={0} iconRelTop={2}
        textRelLeft={44} textRelTop={0} textWidth={462} textHeight={53}
        text="Front‑end developer with a strong UI/UX focus"
        visible={floatVisible} delay={0}
      />
      {/* Group3: box(717,1066) icon(720,1068) text(761,1062 h53 w462) */}
      <DesktopBullet
        wLeft={717} wTop={1062}
        boxRelTop={4} iconRelTop={6}
        textRelLeft={44} textRelTop={0} textWidth={462} textHeight={53}
        text="Actively pursuing software engineering internships"
        visible={floatVisible} delay={0.2}
      />
      {/* Group4: box(717,1144) icon(720,1146) text(761,1149) */}
      <DesktopBullet
        wLeft={717} wTop={1144}
        boxRelTop={0} iconRelTop={2}
        textRelLeft={44} textRelTop={5} textWidth={462} textHeight={24}
        text="React, JavaScript, TypeScript, CSS, Figma"
        whitespace="whitespace-nowrap"
        visible={floatVisible} delay={0.4}
      />

      {/* Photo */}
      <div className="absolute h-[512px] left-[111px] pointer-events-none top-[710px] w-[502px]">
        <div className="absolute inset-0 opacity-80 overflow-hidden">
          <img alt="" className="absolute h-[187.11%] left-[-13.68%] max-w-none top-[-73.49%] w-[127.54%]" src={imgAboutMe} />
        </div>
        <div aria-hidden className="absolute border-2 border-[#492134] border-solid inset-0" />
      </div>
      {/* Pink title bar */}
      <div className="absolute bg-[#8d2b59] border-2 border-[#492134] border-solid h-[35px] left-[111px] top-[675px] w-[502px]" />
      {/* Window buttons */}
      <div className="absolute bg-[#f2d6e3] h-[24px] left-[574px] top-[681px] w-[31px]" />
      <div className="absolute bg-[#f2d6e3] h-[24px] left-[533px] top-[681px] w-[31px]" />
      <div className="absolute bg-[#f2d6e3] h-[24px] left-[492px] top-[681px] w-[31px]" />
      {/* Minimize line */}
      <div className="absolute h-0 left-[499px] top-[699px] w-[18px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 18 2" width="18">
            <line stroke="#492134" strokeWidth="2" x2="18" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      {/* Maximize box */}
      <div className="absolute border-2 border-[#492134] border-solid h-[17px] left-[538px] top-[684px] w-[22px]" />
      {/* Plus icon (Group5) */}
      <div className="absolute flex items-center justify-center left-[568px] size-[42.924px] top-[672px]">
        <div className="-rotate-45 flex-none">
          <div className="overflow-clip relative size-[30.352px]">
            <div className="absolute inset-[20.83%]">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.705" preserveAspectRatio="none" viewBox="0 0 17.705 17.705" width="17.705">
                <path d={svgPaths.p3fe8dd40} fill="#492134" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Divider About→Portfolio */}
      <div className="absolute h-0 left-[245px] top-[1336px] w-[943px]">
        <div className="absolute inset-[-4px_0_0_0]">
          <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 943 4" width="943">
            <line stroke="#F7D698" strokeWidth="4" x2="943" y1="2" y2="2" />
          </svg>
        </div>
      </div>

      {/* ── Portfolio Section ── */}
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[719px] not-italic text-[#492134] text-[36px] text-center top-[1403px] whitespace-nowrap">PORTFOLIO</p>
      {/* Corner bracket (Group6) */}
      <div className="absolute flex items-center justify-center left-[98px] size-[66px] top-[1514px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[66px]">
            <div className="absolute inset-[0_-3.03%_0_0]">
              <svg fill="none" height="66" preserveAspectRatio="none" viewBox="0 0 68 66" width="68">
                <line stroke="#8D2B59" strokeWidth="2" x2="66" y1="2" y2="2" />
                <line stroke="#8D2B59" strokeWidth="2" x1="67" x2="67" y1="4.37114e-08" y2="66" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio underline */}
      <div className="absolute h-0 left-[660px] top-[1462px] w-[114px]">
        <div className="absolute inset-[-4px_0_0_0]">
          <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 114 4" width="114">
            <line stroke="#F1F798" strokeWidth="4" x2="114" y1="2" y2="2" />
          </svg>
        </div>
      </div>
      {/* Project cards */}
      {PROJECTS.map((p) => <DesktopCard key={p.key} p={p} />)}
      {/* Divider Portfolio→Skills */}
      <div className="absolute h-0 left-[260px] top-[2395px] w-[943px]">
        <div className="absolute inset-[-4px_0_0_0]">
          <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 943 4" width="943">
            <line stroke="#F7D698" strokeWidth="4" x2="943" y1="2" y2="2" />
          </svg>
        </div>
      </div>

      {/* ── Skills Section ── */}
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[716.5px] not-italic text-[#492134] text-[36px] text-center top-[2471px] whitespace-nowrap">SKILLS</p>
      <div className="absolute flex h-[1.064px] items-center justify-center left-[681px] top-[2534px] w-[65.991px]">
        <div className="flex-none rotate-[-0.92deg]">
          <div className="h-0 relative w-[66px]">
            <div className="absolute inset-[-4px_0_0_0]">
              <svg fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 66 4" width="66">
                <line stroke="#F1F798" strokeWidth="4" x2="66" y1="2" y2="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Web Dev */}
      <div className="absolute bg-[#af507d] border-2 border-[#492134] border-solid h-[180px] left-[95px] top-[2593px] w-[261px]" />
      <div className="absolute left-[110px] overflow-clip size-[45px] top-[2600px]">
        <div className="absolute inset-[8.33%]">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.pdb50800} fill="#1D1B20" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[173px] not-italic text-[#f9fdc0] text-[24px] top-[2641px] whitespace-nowrap">Web Dev</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[normal] left-[225.5px] not-italic text-[#f2d6e3] text-[16px] text-center top-[2679px] w-[231px] whitespace-pre-wrap">{`JavaScript | React | React Native (Expo) | C++ | Python   UI/UX Design | Responsive Interfaces`}</p>
      {/* Data & Analytics */}
      <div className="absolute bg-[#af507d] border-2 border-[#492134] border-solid h-[180px] left-[424px] top-[2593px] w-[261px]" />
      <div className="absolute left-[435px] size-[46px] top-[2596px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDatabase} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[458px] not-italic text-[#f9fdc0] text-[24px] top-[2641px] whitespace-nowrap">{`Data & Analytics`}</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[normal] left-[554.5px] not-italic text-[#f2d6e3] text-[16px] text-center top-[2679px] w-[231px] whitespace-pre-wrap">{`Power BI | Azure | Workday | Fabric Pipelines   Data Processing | Intent Analysis | Dashboard Design`}</p>
      {/* Design to Code */}
      <div className="absolute bg-[#af507d] border-2 border-[#492134] border-solid h-[180px] left-[753px] top-[2593px] w-[261px]" />
      <div className="absolute left-[769px] size-[44px] top-[2598px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCode} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[794px] not-italic text-[#f9fdc0] text-[24px] top-[2641px] whitespace-nowrap">Design to Code</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[normal] left-[883.5px] not-italic text-[#f2d6e3] text-[16px] text-center top-[2679px] w-[231px] whitespace-pre-wrap">{`Figma → React | Figma → Web   Wireframes → Functional UI   Mockups → Interactive Components`}</p>
      {/* SWE */}
      <div className="absolute bg-[#af507d] border-2 border-[#492134] border-solid h-[180px] left-[1083px] top-[2593px] w-[261px]" />
      <div className="absolute left-[1098px] size-[43px] top-[2602px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCodeBranch} />
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[1186px] not-italic text-[#f9fdc0] text-[24px] top-[2641px] whitespace-nowrap">SWE</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[normal] left-[1213.5px] not-italic text-[#f2d6e3] text-[16px] text-center top-[2679px] w-[231px]">{`Git | Version Control Workflows | OOP | Data Structures & Algorithms | Deployment Pipelines `}</p>

      {/* ── Contact Section ── */}
      <div className="absolute bg-[#8d2b59] h-[256px] left-[-6px] top-[2944px] w-[1446px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[108px] not-italic text-[#492134] text-[30px] top-[3022px] whitespace-nowrap">ARELI SMITH</p>
      <div className="absolute border border-[#492134] border-solid h-[64px] left-[95px] top-[3073px] w-[363px]" />
      <div className="absolute bg-[#492134] h-[64px] left-[106px] top-[3064px] w-[363px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium h-[50px] leading-[normal] left-[117px] not-italic text-[#f2d6e3] text-[20px] top-[3071px] w-[341px]">Computer Science Student Minoring in Digital Arts and Science</p>
      <a
        className="[word-break:break-word] absolute block font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[885px] not-italic text-[#f1f798] text-[30px] top-[2988px] whitespace-nowrap"
        href="mailto:areli.m.s.365@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">areli.m.s.365@gmail.com</p>
      </a>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[885px] not-italic text-[#f1f798] text-[30px] top-[3054px] whitespace-nowrap">{` www.linkedin.com/in/arelismith`}</p>
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[885px] not-italic text-[#f1f798] text-[30px] top-[3120px] whitespace-nowrap">321-230-5069</p>
      <div className="absolute left-[768px] size-[72px] top-[2972px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEnvelope} />
      </div>
      <div className="absolute left-[768px] size-[72px] top-[3037px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLinkedin} />
      </div>
      <div className="absolute left-[768px] size-[72px] top-[3102px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhone} />
      </div>
    </div>
  );
}

// ─── Mobile layout ────────────────────────────────────────────────────────────

function MobileCard({ p }: { p: Project }) {
  return (
    <div className="flex flex-col">
      {/* Placeholder image */}
      <div className="h-[220px] bg-[#d9d9d9] border border-[#492134]" />
      {/* Project name */}
      <p className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[18px] mt-2">{p.name}</p>
      {/* Tech stack + description always visible on mobile */}
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#492134] text-[14px] mt-1">{p.techStack}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#492134] text-[14px] mt-1 leading-snug">{p.description}</p>
      {/* Project link */}
      <div className="flex items-center gap-1 mt-2">
        <span className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[16px]">Project Link </span>
        <div className="relative overflow-clip w-[20px] h-[10px]">
          <LinkSvg />
        </div>
      </div>
    </div>
  );
}

function MobilePage({
  activeSection, typedText, typingDone, floatVisible, onNavClick, menuOpen, setMenuOpen,
}: {
  activeSection: string;
  typedText: string;
  typingDone: boolean;
  floatVisible: boolean;
  onNavClick: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT ME" },
    { id: "work", label: "WORK" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <div style={{ background: "linear-gradient(to bottom, #af507d 0%, #f1f798 62.5%, #8d2b59 100%)", minHeight: "100vh" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#8d2b59] h-[48px] flex items-center px-4 justify-between">
        <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#f2d6e3] text-[20px]">ARELI SMITH</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-[5px] p-1" aria-label="Menu">
          <span className="block w-6 h-[2px] bg-[#f2d6e3]" />
          <span className="block w-6 h-[2px] bg-[#f2d6e3]" />
          <span className="block w-6 h-[2px] bg-[#f2d6e3]" />
        </button>
        {menuOpen && (
          <div className="absolute top-[48px] left-0 right-0 bg-[#8d2b59] z-50 flex flex-col border-t border-[#492134]">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { onNavClick(id); setMenuOpen(false); }}
                className={`text-left px-4 py-3 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] ${activeSection === id ? "text-[#F1F798]" : "text-[#f2d6e3]"}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Pixel background (decorative) */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
        <img alt="" src={bgPixels} className="absolute inset-0 w-full h-full object-cover opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Home */}
        <section id="home" className="px-5 pt-10 pb-12">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[28px] leading-normal">Hello!</p>
          <div className="w-[50px] h-[3px] bg-[#CFD746] my-2" />
          <div className="flex items-center">
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[28px] leading-normal whitespace-nowrap">{typedText}</span>
            <span className={`inline-block w-[6px] h-[28px] bg-[#F1F798] ml-[2px] flex-shrink-0 ${typingDone ? "cursor-blink" : ""}`} />
          </div>
          <div className="relative mt-5">
            <div className="absolute border border-[#492134] inset-0 translate-x-[9px] translate-y-[9px]" />
            <div className="relative bg-[#492134] px-3 py-2">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#fcfee0] text-[16px] leading-snug">Computer Science Student Minoring in Digital Arts and Science</p>
            </div>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[#492134] text-[16px] leading-snug mt-3">Computer Science Student Minoring in Digital Arts and Science</p>
          <div className="relative mt-4 inline-block">
            <div className="absolute border border-[#492134] inset-0 translate-x-[6px] translate-y-[6px]" />
            <button className="relative bg-[#fdf2c0] px-8 py-2">
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#492134] text-[18px]">RESUME</span>
            </button>
          </div>
          {/* Sprite */}
          <div className="flex justify-center mt-6">
            <div className="-scale-y-100 rotate-180 w-[180px] h-[174px] overflow-hidden relative">
              <img alt="Pixel art character" src={imgSprite} className="absolute max-w-none" style={{ height: "115.75%", left: "-11.48%", top: 0, width: "450%" }} />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-5 h-[3px] bg-[#F7D698] opacity-80" />

        {/* About Me */}
        <section id="about" className="px-5 pt-10 pb-12">
          <div className="mb-6">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[30px]">About Me!</h2>
            <div className="w-[120px] h-[3px] bg-[#F1F798] mt-1" />
          </div>
          {/* Faux-window photo */}
          <div className="border-2 border-[#492134] mb-6">
            <div className="bg-[#8d2b59] border-b-2 border-[#492134] h-[32px] flex items-center px-2 gap-2">
              <div className="flex gap-2 ml-auto">
                {[0,1,2].map(i => <div key={i} className="bg-[#f2d6e3] h-[20px] w-[26px]" />)}
              </div>
            </div>
            <div className="bg-[#d9d9d9] relative" style={{ height: 280 }}>
              <div className="absolute inset-0 opacity-80 overflow-hidden">
                <img alt="Areli Smith" src={imgAboutMe} className="absolute max-w-none" style={{ height: "187.11%", left: "-13.68%", top: "-73.49%", width: "127.54%" }} />
              </div>
            </div>
          </div>
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[16px] leading-relaxed mb-6">{`I'm a front‑end developer and Computer Science major at the University of Florida with a strong focus on building interactive, user‑centered interfaces. I love creating clean, intuitive designs and refining UI experiences through collaboration, feedback, and real‑world engineering practices. I'm currently pursuing software engineering internships where I can contribute, learn from mentors, and continue growing as a developer.`}</p>
          {/* Animated bullets */}
          {[
            "Front‑end developer with a strong UI/UX focus",
            "Actively pursuing software engineering internships",
            "React, JavaScript, TypeScript, CSS, Figma",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 mb-4 float-item"
              style={{ animation: floatVisible ? `floatUp 0.55s ease ${i * 0.2}s forwards` : "none" }}
            >
              <div className="flex-shrink-0 relative border-2 border-[#492134] w-[26px] h-[26px] mt-[2px]">
                <div className="absolute inset-[20%]"><CheckSvg /></div>
              </div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[16px] leading-snug">{text}</p>
            </div>
          ))}
        </section>

        {/* Divider */}
        <div className="mx-5 h-[3px] bg-[#F7D698] opacity-80" />

        {/* Portfolio */}
        <section id="work" className="px-5 pt-10 pb-12">
          <div className="text-center mb-6">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[30px]">PORTFOLIO</h2>
            <div className="w-[110px] h-[3px] bg-[#F1F798] mx-auto mt-1" />
          </div>
          <div className="flex flex-col gap-8">
            {PROJECTS.map((p) => <MobileCard key={p.key} p={p} />)}
          </div>
        </section>

        {/* Divider */}
        <div className="mx-5 h-[3px] bg-[#F7D698] opacity-80" />

        {/* Skills */}
        <section id="skills" className="px-5 pt-10 pb-12">
          <div className="text-center mb-6">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[30px]">SKILLS</h2>
            <div className="w-[64px] h-[3px] bg-[#F1F798] mx-auto mt-1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <img alt="" src={imgCode} className="w-9 h-9 object-cover" />, title: "Web Dev", desc: "JavaScript | React | React Native | C++ | Python\nUI/UX Design | Responsive Interfaces" },
              { icon: <img alt="" src={imgDatabase} className="w-9 h-9 object-cover" />, title: "Data & Analytics", desc: "Power BI | Azure | Workday\nFabric Pipelines\nData Processing | Intent Analysis" },
              { icon: <img alt="" src={imgCode} className="w-9 h-9 object-cover" />, title: "Design to Code", desc: "Figma → React\nFigma → Web\nWireframes → Functional UI" },
              { icon: <img alt="" src={imgCodeBranch} className="w-9 h-9 object-cover" />, title: "SWE", desc: "Git | Version Control | OOP\nData Structures & Algorithms\nDeployment Pipelines" },
            ].map((s, i) => (
              <div key={i} className="bg-[#af507d] border-2 border-[#492134] p-3 flex flex-col items-center">
                <div className="mb-2">{s.icon}</div>
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[#f9fdc0] text-[16px] text-center">{s.title}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[#f2d6e3] text-[12px] text-center mt-1 leading-snug whitespace-pre-line">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact footer */}
        <footer id="contact" className="bg-[#8d2b59] px-5 py-10">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[#492134] text-[24px] mb-4">ARELI SMITH</p>
          <div className="relative mb-6 inline-block">
            <div className="absolute border border-[#492134] inset-0 translate-x-[8px] translate-y-[8px]" />
            <div className="relative bg-[#492134] px-3 py-2 max-w-[280px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[#f2d6e3] text-[15px] leading-snug">Computer Science Student Minoring in Digital Arts and Science</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:areli.m.s.365@gmail.com" className="flex items-center gap-3" target="_blank" rel="noreferrer">
              <img alt="Email" src={imgEnvelope} className="w-[44px] h-[44px] object-cover" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[#f1f798] text-[16px] underline break-all">areli.m.s.365@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/arelismith" className="flex items-center gap-3" target="_blank" rel="noreferrer">
              <img alt="LinkedIn" src={imgLinkedin} className="w-[44px] h-[44px] object-cover" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[#f1f798] text-[14px]">www.linkedin.com/in/arelismith</span>
            </a>
            <div className="flex items-center gap-3">
              <img alt="Phone" src={imgPhone} className="w-[44px] h-[44px] object-cover" />
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[#f1f798] text-[18px]">321-230-5069</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const typingStarted = useRef(false);
  const floatStarted = useRef(false);

  // Start typing immediately on mount (home section is visible at load)
  useEffect(() => {
    if (typingStarted.current) return;
    typingStarted.current = true;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTypedText(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Scroll-based: active section + float-up trigger
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Section boundaries (desktop: 1440px layout; mobile: proportionally shorter)
      if (y < 560) setActiveSection("home");
      else if (y < 1310) setActiveSection("about");
      else if (y < 2370) setActiveSection("work");
      else setActiveSection("contact");

      if (!floatStarted.current && y > 550) {
        floatStarted.current = true;
        setFloatVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Desktop scroll targets (section top minus 48px nav height)
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const targets: Record<string, number> = {
      home: 0,
      about: 624,   // 672 - 48
      work: 1355,   // 1403 - 48
      contact: 2896, // 2944 - 48
    };
    window.scrollTo({ top: targets[id] ?? 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop — shown on ≥1024px */}
      <div className="hidden lg:block">
        <DesktopPage
          activeSection={activeSection}
          typedText={typedText}
          typingDone={typingDone}
          floatVisible={floatVisible}
          onNavClick={scrollToSection}
        />
      </div>
      {/* Mobile — shown on <1024px */}
      <div className="block lg:hidden">
        <MobilePage
          activeSection={activeSection}
          typedText={typedText}
          typingDone={typingDone}
          floatVisible={floatVisible}
          onNavClick={scrollToSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </>
  );
}
