import {Settings} from '../Settings'
import {open as openPopout} from '../Modules/Popout'
import {waitFor} from '../@util/waitFor'

export async function open(sheet: ActorSheet): Promise<void> {
  sheet.render(true)

  await waitFor(() => sheet.rendered)

  const settings = Settings.GetInstance()
  if (settings.AutoOpen.AsPopout) {
    openPopout(sheet)
  }
}