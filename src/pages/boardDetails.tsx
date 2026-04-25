import { useParams, Link } from 'react-router-dom';

export default function BoardDetails() {
    const { boardId } = useParams();

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Board Details</h1>

            <p className="mb-6 text-slate-500">
                Board ID: {boardId}
            </p>

            <div className="space-y-4">
                <div className="p-4 border rounded-xl">
                    <h2 className="text-xl font-semibold">Community Bingo Night</h2>
                    <p>Friday nights at 7 PM.</p>
                </div>

                <div className="flex gap-4">
                    <Link
                        to={`/play/${boardId}`}
                        className="bg-emerald-600 text-white px-5 py-3 rounded-lg"
                    >
                        Play Board
                    </Link>

                    <Link
                        to={`/host/${boardId}`}
                        className="bg-slate-800 text-white px-5 py-3 rounded-lg"
                    >
                        Host Controls
                    </Link>
                </div>
            </div>
        </div>
    );
}