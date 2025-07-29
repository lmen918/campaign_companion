import {RpgEvent, EventData, RpgPlayer} from '@rpgjs/server'

@EventData({
    name: 'QuestBoard',
    hitbox: {
        width: 32,
        height: 32
    }
})

export default class QuestBoardEvent extends RpgEvent {
    async onAction(player: RpgPlayer) {
        // Example: Open the QuestBoard GUI when the player joins the map or interacts with an NPC
        await player.gui('quest-board') // The GUI ID is 'quest-board' based on the function name
            .open({
                quests: [
                    {
                        id: '1',
                        title: 'Find the Lost Key',
                        description: 'A villager lost their key in the forest.',
                        requester: 'Old Man Jenkins',
                        completed: false
                    },
                    {
                        id: '2',
                        title: 'Slay the Goblins',
                        description: 'Goblins are terrorizing the nearby farm.',
                        requester: 'Farmer Fred',
                        completed: false
                    }
                ]
            });
    }
}