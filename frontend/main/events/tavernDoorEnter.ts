import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'Tavern',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class TavernDoorEnterEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('Tavern');
    }
}