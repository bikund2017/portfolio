import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

interface GitHubUserData {
    login: string;
    public_gists: number;
    public_repos: number;
    followers: number;
    created_at: string;
}

const CodingStats = (): React.ReactElement => {
    const [userData, setUserData] = useState<GitHubUserData | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/users/bikund2017')
            .then(response => response.json())
            .then((data: GitHubUserData) => setUserData(data));
    }, []);

    if (!userData) return <div className="text-white text-center">Loading...</div>;

    return (
        <section className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center py-10 relative overflow-hidden">
            {/* Background Stars */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* You can generate animated stars using CSS or a library */}
            </div>

            <h1 className="text-4xl font-bold mb-10 text-yellow-400 z-10">Coding Stats &lt;/&gt;</h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-14 z-10">

                {/* Profile */}
                <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center bg-[#112240]">
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h2 className="text-xl font-semibold">@{userData.login}</h2>
                </div>

                {/* GitHub Stats */}
                <div className="border border-gray-700 rounded-lg p-6 w-80 flex flex-col items-center bg-[#112240]">
                    <h2 className="text-2xl mb-6 text-yellow-400">GitHub Stats</h2>
                    <ul className="space-y-3 text-center">
                        <li>🌟 Total Stars Earned: <span className="font-bold">{userData.public_gists}</span></li>
                        <li>📝 Public Repos: <span className="font-bold">{userData.public_repos}</span></li>
                        <li>👥 Followers: <span className="font-bold">{userData.followers}</span></li>
                        <li>📅 Joined GitHub: <span className="font-bold">{new Date(userData.created_at).getFullYear()}</span></li>
                    </ul>
                    <div className="w-24 h-24 border-4 border-yellow-400 rounded-full flex items-center justify-center mt-6 text-2xl font-bold">
                        B+
                    </div>
                </div>

            </div>

            {/* GitHub Contributions */}
            <div className="border border-gray-700 rounded-lg p-6 w-full max-w-6xl bg-[#112240] z-10">
                <h2 className="text-2xl mb-6 text-center text-yellow-400">GitHub Contributions</h2>
                <GitHubCalendar
                    username="bikund2017"
                    blockSize={12}
                    blockMargin={4}
                    colorScheme="dark"
                    fontSize={16}
                />
            </div>
        </section>
    );
};

export default CodingStats;
