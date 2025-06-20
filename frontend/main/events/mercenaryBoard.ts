import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'MercenaryBoard',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class MaercenaryBoardEvent extends RpgEvent {
    async onAction(player: RpgPlayer) {
        await player.showText('You found 10 gold.', {
            talkWith: this
        })
        player.gold += 10
    }
}