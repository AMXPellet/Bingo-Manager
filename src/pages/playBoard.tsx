import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PlayBoard() {
    const { boardId } = useParams();

    const [marked, setMarked] = useState<number[]>([]);

    const toggle = (n: number) => {
        setMarked((prev) =>
            prev.includes(n)
                ? prev.filter((x) => x !== n)
                : [...prev, n]
        );
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Playable Board</h1>
            <p className="mb-8 text-slate-500">Board ID: {boardId}</p>

            <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 25 }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => toggle(i)}
                        className={`aspect-square rounded-xl border text-lg font-bold
                        ${marked.includes(i)
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white text-black'
                        }`}
                    >
                        {i === 12 ? 'FREE' : i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}