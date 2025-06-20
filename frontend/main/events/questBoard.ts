import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'QuestBoard',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class QuestBoardEvent extends RpgEvent {
    async onAction(player: RpgPlayer) {
        await player.showText('You found 10 gold.', {
            talkWith: this
        })
        player.gold += 10
    }
}