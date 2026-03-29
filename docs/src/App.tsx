import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Bug,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Loader2,
  Lock,
  Mail,
  Search,
  Shield,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "./hooks/useQueries";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
      <Toaster position="bottom-right" theme="dark" />
    </QueryClientProvider>
  );
}

const NAV_LINKS: Array<[string, string, string]> = [
  ["home", "home", "nav.home.link"],
  ["skills", "skills", "nav.skills.link"],
  ["projects", "projects", "nav.projects.link"],
  ["experience", "experience", "nav.experience.link"],
  ["contact", "contact", "nav.contact.link"],
];

function Portfolio() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-mono">
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b border-card-border/60 bg-[#0B0F12]/95 backdrop-blur-sm"
        data-ocid="nav.panel"
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span
            className="text-neon-green font-bold text-lg tracking-widest"
            style={{ textShadow: "0 0 10px #39D36E66" }}
          >
            ANUP_MAURYA
          </span>
          <nav className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
            {NAV_LINKS.map(([id, label, ocid]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="px-3 py-1 hover:text-neon-green transition-colors"
                data-ocid={ocid}
              >
                [./{label}]
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="text-xs border border-neon-green text-neon-green px-3 py-1.5 hover:bg-neon-green/10 transition-all duration-200"
            style={{ boxShadow: "0 0 8px #39D36E33" }}
            data-ocid="nav.download_cv.button"
          >
            [DOWNLOAD_CV]
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* HERO */}
        <section id="home" className="py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-neon-green mb-4"
                style={{ textShadow: "0 0 18px #39D36E88" }}
              >
                &gt;$ whoami
                <span
                  className="inline-block w-0.5 h-10 bg-neon-green ml-1 align-middle"
                  style={{ opacity: cursorVisible ? 1 : 0 }}
                />
              </div>
              <h1 className="text-xl text-foreground font-semibold mb-1">
                Anup Maurya
              </h1>
              <p className="text-sm text-muted-foreground mb-5">
                Cybersecurity Professional{" "}
                <span className="text-neon-green/60">|</span> Penetration Tester{" "}
                <span className="text-neon-green/60">|</span> OSCP · CRTP · HTB
                CPTS
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                Seasoned cybersecurity professional with 6+ years across
                top-tier firms including TCS, PwC, Tektronix, and HPE.
                Specializing in penetration testing, attack surface management,
                and vulnerability management.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollTo("projects")}
                  className="text-xs border border-neon-green text-neon-green px-4 py-2 hover:bg-neon-green/10 transition-all duration-200"
                  style={{ boxShadow: "0 0 8px #39D36E33" }}
                  data-ocid="hero.explore.button"
                >
                  [EXPLORE_PORTFOLIO]
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="text-xs border border-neon-green/50 text-neon-green/80 px-4 py-2 hover:bg-neon-green/5 transition-all duration-200"
                  data-ocid="hero.contact.button"
                >
                  [GET_IN_TOUCH]
                </button>
              </div>
            </motion.div>

            {/* Monitor card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <div
                className="border border-neon-green/60 bg-card-bg rounded-sm overflow-hidden"
                style={{
                  boxShadow: "0 0 20px #39D36E33, inset 0 0 20px #39D36E08",
                }}
              >
                <div className="flex items-center gap-2 px-3 py-2 border-b border-card-border/60 bg-[#0d1719]">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    anup@cybersec:~$
                  </span>
                </div>
                <div className="relative">
                  <img
                    src="/assets/generated/cyber-hero.dim_480x360.jpg"
                    alt="Cybersecurity professional"
                    className="w-full h-64 object-cover opacity-85"
                  />
                  <div
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-green/40 to-transparent"
                    style={{ animation: "scan 3s linear infinite" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B0F12] to-transparent h-16" />
                </div>
                <div className="px-4 py-3 text-xs text-neon-green/70">
                  <span className="text-neon-green">&gt;$ </span>status:{" "}
                  <span className="text-neon-green animate-pulse">ACTIVE</span>{" "}
                  | clearance: <span className="text-accent">TOP_SEC</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2FD7D7]/40 to-transparent" />
        </section>

        {/* SKILLS & CERTS */}
        <section id="skills" className="py-16">
          <SectionHeader title="SKILLS &amp; CERTIFICATIONS" />
          <div className="grid md:grid-cols-4 gap-5 mt-8">
            <SkillCard
              icon={<Shield size={22} className="text-neon-green" />}
              title="[NETWORK SECURITY]"
              items={[
                "Firewall config & IDS/IPS",
                "VPN architecture & segmentation",
                "Network traffic analysis",
                "Zero-trust implementation",
              ]}
            />
            <SkillCard
              icon={<Terminal size={22} className="text-neon-green" />}
              title="[PENETRATION TESTING]"
              items={[
                "Web app vulnerability research",
                "Exploit development & PoC",
                "Red team operations",
                "Active Directory attacks",
              ]}
            />
            <SkillCard
              icon={<Lock size={22} className="text-neon-green" />}
              title="[ATTACK SURFACE MGMT]"
              items={[
                "External asset discovery",
                "Shadow IT identification",
                "Continuous exposure monitoring",
                "Attack surface reduction",
              ]}
            />
            <SkillCard
              icon={<Bug size={22} className="text-neon-green" />}
              title="[VULNERABILITY MGMT]"
              items={[
                "Vulnerability scanning & triage",
                "Risk-based remediation prioritization",
                "CVE analysis & patch tracking",
                "Vulnerability reporting & SLAs",
              ]}
            />
          </div>
          {/* Certifications row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-5 border border-card-border bg-card-bg rounded-sm p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Search size={18} className="text-neon-green" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                [CERTIFICATIONS]
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  name: "OSCP",
                  full: "Offensive Security Certified Professional",
                  color: "text-neon-green",
                },
                {
                  name: "CRTP",
                  full: "Certified Red Team Professional",
                  color: "text-accent",
                },
                {
                  name: "HTB CPTS",
                  full: "HackTheBox Certified Penetration Testing Specialist",
                  color: "text-neon-green/80",
                },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="flex-1 min-w-[180px] border border-card-border/80 bg-[#0d1719] px-4 py-3 rounded-sm"
                >
                  <span className={`text-sm font-bold ${cert.color}`}>
                    {cert.name}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {cert.full}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <SectionHeader title="PROJECTS / CTF WRITEUPS" />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ProjectCard
              gradient="from-[#0d2b1e] to-[#091a14]"
              accentColor="#39D36E"
              tag="WEB PENTEST"
              title="SQL Injection to RCE"
              description="Full chain exploitation of a financial portal — SQLi to shell via stored procedure abuse. Achieved domain admin in 4 hours."
              tags={["SQLi", "RCE", "Bug Bounty"]}
              index={1}
            />
            <ProjectCard
              gradient="from-[#0d1e2b] to-[#091419]"
              accentColor="#2FD7D7"
              tag="ACTIVE DIRECTORY"
              title="AD Red Team Engagement"
              description="Full internal red team from phishing to domain compromise — Kerberoasting, lateral movement, DCSync, and persistence via GPO."
              tags={["CRTP", "BloodHound", "Mimikatz"]}
              index={2}
            />
            <ProjectCard
              gradient="from-[#2b1a0d] to-[#1a1009]"
              accentColor="#E8A825"
              tag="VULNERABILITY MGMT"
              title="Enterprise ASM Program"
              description="Built and operationalized an attack surface management program reducing external exposure by 60% within 3 months."
              tags={["ASM", "Nuclei", "Shodan"]}
              index={3}
            />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16">
          <SectionHeader title="WORK EXPERIENCE" />
          <div className="mt-10 relative pl-8">
            <div
              className="absolute left-0 top-2 bottom-2 w-px"
              style={{
                background: "linear-gradient(to bottom, #39D36E, #39D36E44)",
              }}
            />
            <ExperienceItem
              title="Cybersecurity Engineer"
              company="Hewlett Packard Enterprise (HPE)"
              period="2025 — Present"
              bullets={[
                "Driving enterprise-wide vulnerability management and attack surface reduction initiatives.",
                "Conducting penetration tests across hybrid cloud and on-prem environments.",
                "Collaborating with SOC and IT teams for continuous threat exposure management.",
              ]}
              index={1}
            />
            <ExperienceItem
              title="Security Consultant"
              company="Tektronix"
              period="2024 — 2025"
              bullets={[
                "Performed red team and penetration testing engagements for enterprise clients.",
                "Led attack surface management assessments and external exposure reviews.",
                "Delivered actionable remediation roadmaps and executive risk summaries.",
              ]}
              index={2}
            />
            <ExperienceItem
              title="Associate — Cybersecurity"
              company="PwC"
              period="2023 — 2024"
              bullets={[
                "Conducted web application, API, and infrastructure penetration tests for global clients.",
                "Performed vulnerability assessments and risk-based triage for Fortune 500 firms.",
                "Supported red team exercises and phishing simulation campaigns.",
              ]}
              index={3}
            />
            <ExperienceItem
              title="Security Analyst"
              company="Tata Consultancy Services (TCS)"
              period="2019 — 2022"
              bullets={[
                "Performed network and application security assessments across banking and telecom sectors.",
                "Built SIEM dashboards and incident detection runbooks, reducing MTTD by 35%.",
                "Earned OSCP certification during tenure; consistently exceeded performance targets.",
              ]}
              index={4}
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <SectionHeader title="CONTACT" />
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <ContactForm />
            <SocialPanel />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-8 border-t border-card-border/60 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex gap-4">
            {["home", "skills", "projects", "experience", "contact"].map(
              (id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() =>
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-neon-green transition-colors"
                >
                  {id}
                </button>
              ),
            )}
          </div>
          <span>
            © {new Date().getFullYear()} Anup Maurya. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
              className="text-neon-green/60 hover:text-neon-green transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span
        className="text-neon-green text-lg font-bold"
        style={{ textShadow: "0 0 10px #39D36E66" }}
      >
        &gt;$
      </span>
      <h2
        className="text-lg font-semibold tracking-widest text-foreground uppercase"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled static strings
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex-1 h-px bg-gradient-to-r from-card-border/60 to-transparent" />
    </motion.div>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-card-border bg-card-bg rounded-sm p-5 hover:border-neon-green/40 transition-all duration-300"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px #39D36E33";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 items-start text-xs text-muted-foreground"
          >
            <span className="text-neon-green mt-0.5 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({
  gradient,
  accentColor,
  tag,
  title,
  description,
  tags,
  index,
}: {
  gradient: string;
  accentColor: string;
  tag: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-card-border bg-card-bg rounded-sm overflow-hidden hover:border-neon-green/40 transition-all duration-300"
      data-ocid={`projects.item.${index}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 0 14px ${accentColor}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div
        className={`h-32 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${accentColor}44 0%, transparent 60%)`,
          }}
        />
        <div
          className="text-xs font-bold tracking-widest px-3 py-1 border"
          style={{ color: accentColor, borderColor: `${accentColor}66` }}
        >
          [{tag}]
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 border border-card-border/80 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  bullets,
  index,
}: {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-10 last:mb-0"
      data-ocid={`experience.item.${index}`}
    >
      <div
        className="absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neon-green bg-card-bg"
        style={{ boxShadow: "0 0 8px #39D36E66" }}
      />
      <div
        className="border border-card-border bg-card-bg rounded-sm p-5 hover:border-neon-green/30 transition-all duration-300"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 0 12px #39D36E22";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="text-sm font-bold text-neon-green"
              style={{ textShadow: "0 0 8px #39D36E44" }}
            >
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{company}</p>
          </div>
          <span className="text-xs text-neon-green/60 border border-card-border/60 px-2 py-0.5">
            {period}
          </span>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex gap-2 items-start text-xs text-muted-foreground"
            >
              <ChevronRight
                size={12}
                className="text-neon-green shrink-0 mt-0.5"
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required");
      return;
    }
    mutate(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success("Message transmitted successfully");
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          toast.error("Transmission failed. Try again.");
        },
      },
    );
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
      data-ocid="contact.modal"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
        >
          name:
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="// your name"
          className="w-full bg-card-bg border border-card-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-green/60 transition-colors"
          data-ocid="contact.name.input"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
        >
          email:
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="// your@email.com"
          className="w-full bg-card-bg border border-card-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-green/60 transition-colors"
          data-ocid="contact.email.input"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs text-muted-foreground mb-1.5 uppercase tracking-wider"
        >
          message:
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="// describe your security needs..."
          rows={5}
          className="w-full bg-card-bg border border-card-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-green/60 transition-colors resize-none"
          data-ocid="contact.message.textarea"
        />
      </div>
      <button
        type="submit"
        disabled={isPending || isSuccess}
        className="w-full border border-neon-green text-neon-green text-xs py-3 uppercase tracking-widest hover:bg-neon-green/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        style={{ boxShadow: "0 0 8px #39D36E33" }}
        data-ocid="contact.submit_button"
      >
        {isPending ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            TRANSMITTING...
          </>
        ) : isSuccess ? (
          "[MESSAGE_SENT ✓]"
        ) : (
          "[SUBMIT_REQUEST]"
        )}
      </button>
      {isSuccess && (
        <p
          className="text-xs text-neon-green text-center"
          data-ocid="contact.success_state"
        >
          &gt;$ Message received. Response ETA: 24h.
        </p>
      )}
    </motion.form>
  );
}

function SocialPanel() {
  const links = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      sub: "github.com/anupmaurya",
      href: "https://github.com",
      color: "text-foreground",
      ocid: "contact.social.link.1",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      sub: "linkedin.com/in/anupmaurya",
      href: "https://linkedin.com",
      color: "text-[#0A66C2]",
      ocid: "contact.social.link.2",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      sub: "anup@cybersec.pro",
      href: "mailto:anup@cybersec.pro",
      color: "text-neon-green",
      ocid: "contact.social.link.3",
    },
    {
      icon: <Bug size={18} />,
      label: "HackTheBox",
      sub: "app.hackthebox.com/profile",
      href: "https://hackthebox.com",
      color: "text-neon-green/80",
      ocid: "contact.social.link.4",
    },
    {
      icon: <Shield size={18} />,
      label: "TryHackMe",
      sub: "tryhackme.com/p/anupmaurya",
      href: "https://tryhackme.com",
      color: "text-accent",
      ocid: "contact.social.link.5",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-3"
    >
      <div className="border border-card-border bg-card-bg rounded-sm p-5 mb-4">
        <p className="text-xs text-neon-green mb-1">
          &gt;$ cat contact_info.txt
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Available for security consulting, red team engagements, and
          vulnerability management programs. Response time typically under 24
          hours.
        </p>
      </div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 border border-card-border bg-card-bg px-4 py-3 hover:border-neon-green/40 transition-all duration-200 group"
          data-ocid={link.ocid}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 10px #39D36E22";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <span className={link.color}>{link.icon}</span>
          <div>
            <div className="text-xs font-semibold text-foreground">
              {link.label}
            </div>
            <div className="text-xs text-muted-foreground">{link.sub}</div>
          </div>
          <ExternalLink
            size={12}
            className="ml-auto text-muted-foreground/50 group-hover:text-neon-green transition-colors"
          />
        </a>
      ))}
    </motion.div>
  );
}
