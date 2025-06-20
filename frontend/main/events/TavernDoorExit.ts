import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'TavernExit',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class TavernDoorExitEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('simplemap', {
            x: 159.08,
            y: 245.27
        });
    }
}