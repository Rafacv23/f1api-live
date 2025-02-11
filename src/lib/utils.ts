import type { RaceApiResponse } from "@f1api/sdk"

export const checkSprint = (
  raceInfo: RaceApiResponse | undefined
): boolean | undefined => {
  const haveSprint = raceInfo?.race.some(
    (race) => race.schedule.sprintRace?.date
  )
  return haveSprint
}
