import ProfileCard from "~/components/ProfileCard";

// ============================================
// YOUR TASK: Replace the placeholder data below
// with your own information!
// ============================================

const developerProfile = {
  name: "Your Name Here",
  role: "Aspiring Full-Stack Developer",
  bio: "I'm learning to build web apps with React Router v7, Supabase, and Claude Code. This is my first Git exercise!",
  location: "Earth",
  skills: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/your-username",
  funFact: "Replace this with something fun about yourself!",
};

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Developer Profile</h1>
        <p className="text-gray-400">
          Edit{" "}
          <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
            app/routes/profile.tsx
          </code>{" "}
          to make this card yours.
        </p>
      </div>

      <ProfileCard profile={developerProfile} />
    </div>
  );
}
