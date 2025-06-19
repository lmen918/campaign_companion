import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-3',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class DoorEvent2 extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('simplemap3');
    }
} 