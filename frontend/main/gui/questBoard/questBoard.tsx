import { RpgReactContext } from '@rpgjs/client/react';
import { useContext, useState } from 'react';
import './QuestBoard.scss'; // Import your styling
import { RpgGui } from '@rpgjs/client';


// Define the Quest interface
interface Quest {
    id: string;
    title: string;
    description: string;
    requester: string;
    completed: boolean;
}

export default function QuestBoard({ quests: initialQuests = [] }) {
    const { rpgCurrentPlayer } = useContext(RpgReactContext);
    const [quests, setQuests] = useState<Quest[]>(initialQuests);
    const [viewMode, setViewMode] = useState<'board' | 'create'>('board');
    const [newQuest, setNewQuest] = useState<Omit<Quest, 'id' | 'completed'>>({
        title: '',
        description: '',
        requester: '',
    });

    const handleCreateQuest = () => {
        const newQuestWithId: Quest = { ...newQuest, id: Date.now().toString(), completed: false };
        setQuests([...quests, newQuestWithId]);
        setNewQuest({ title: '', description: '', requester: '' });
        setViewMode('board');
    };

    const handleAcceptQuest = (questId: string) => {
        const updatedQuests = quests.map(quest =>
            quest.id === questId ? { ...quest, completed: false } : quest
        );
        setQuests(updatedQuests);
    };

    const handleCloseGUI = () => {
        if (rpgCurrentPlayer) {
            rpgCurrentPlayer.removeGui('quest-board'); // 'quest-board' is the ID of your GUI
        }
    };

    const handleHideGUI = () => {
        if (rpgCurrentPlayer) {
            rpgCurrentPlayer.on(rpgCurrentPlayer.click(RpgGui.hide('quest-board')));
        }
    };

    return (
        <div className="quest-board-gui">
            <button className="close-button" onClick={handleHideGUI}>X</button> {/* Close Button */}

            {viewMode === 'board' && (
                <div>
                    <h2>Quest Board</h2>
                    <button onClick={() => setViewMode('create')}>Create New Quest</button>
                    <ul className="quest-list">
                        {quests.map(quest => (
                            <li key={quest.id} className="quest-item">
                                <h3>{quest.title}</h3>
                                <p>{quest.description}</p>
                                <p>Requested by: {quest.requester}</p>
                                {!quest.completed && <button onClick={() => handleAcceptQuest(quest.id)}>Accept Quest</button>}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {viewMode === 'create' && (
                <div className="create-quest-form">
                    <h2>Create New Quest</h2>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={newQuest.title}
                            onChange={(e) => setNewQuest({ ...newQuest, title: e.target.value })}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={newQuest.description}
                            onChange={(e) => setNewQuest({ ...newQuest, description: e.target.value })}
                        ></textarea>
                    </label>
                    <label>
                        Requester:
                        <input
                            type="text"
                            value={newQuest.requester}
                            onChange={(e) => setNewQuest({ ...newQuest, requester: e.target.value })}
                        />
                    </label>
                    <button onClick={handleCreateQuest}>Add Quest</button>
                    <button onClick={() => setViewMode('board')}>Cancel</button>
                </div>
            )}
        </div>
    );
}

