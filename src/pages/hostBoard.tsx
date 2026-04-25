import { useParams } from 'react-router-dom';

export default function HostBoard() {
    const { boardId } = useParams();

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Host Controls</h1>

            <p className="text-slate-500 mb-8">
                Managing board: {boardId}
            </p>

            <div className="grid gap-4">
                <button className="bg-emerald-600 text-white p-4 rounded-xl">
                    Call Next Space
                </button>

                <button className="bg-red-500 text-white p-4 rounded-xl">
                    Reset Board
                </button>

                <button className="bg-slate-800 text-white p-4 rounded-xl">
                    End Session
                </button>
            </div>
        </div>
    );
}