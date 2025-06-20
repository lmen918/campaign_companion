import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'RecordHallExit',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class RecordHallExitEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('');
    }
}