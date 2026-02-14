interface ProfileData {
  name: string;
  role: string;
  bio: string;
  location: string;
  skills: string[];
  github: string;
  funFact: string;
}

export default function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-bold text-white">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
            <p className="text-blue-200">{profile.role}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6">
        <p className="text-gray-300">{profile.bio}</p>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>\uD83D\uDCCD</span>
          <span>{profile.location}</span>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Fun Fact
          </h3>
          <p className="text-gray-300">{profile.funFact}</p>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}
