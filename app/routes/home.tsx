import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Git Practice
        </h1>
        <p className="text-lg text-gray-400">
          This is your first React Router v7 + Supabase app. You cloned it from
          GitHub to practice the Git workflow.
        </p>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">Your Tasks</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>
            Run{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              npm install
            </code>{" "}
            and{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              npm run dev
            </code>{" "}
            to start the app
          </li>
          <li>
            Visit the{" "}
            <Link to="/profile" className="text-blue-400 underline">
              Profile page
            </Link>{" "}
            and see the placeholder card
          </li>
          <li>
            Open{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              app/routes/profile.tsx
            </code>{" "}
            and replace the placeholder info with your own
          </li>
          <li>
            Commit your changes with{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              git add . && git commit -m &quot;Add my profile info&quot;
            </code>
          </li>
          <li>
            Push to your repo with{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              git push
            </code>
          </li>
          <li>
            Edit the README on GitHub, then{" "}
            <code className="rounded bg-gray-800 px-2 py-0.5 text-blue-400">
              git pull
            </code>{" "}
            locally
          </li>
        </ol>
      </div>

      <div className="rounded-xl border border-yellow-800/50 bg-yellow-900/20 p-6 space-y-2">
        <h3 className="font-semibold text-yellow-300">About this project</h3>
        <p className="text-sm text-yellow-200/80">
          This app uses <strong>React Router v7</strong> (framework mode) for
          routing and <strong>Supabase</strong> for the database client. You will
          use these same tools to build Threadly in the rest of the course.
        </p>
      </div>
    </div>
  );
}
