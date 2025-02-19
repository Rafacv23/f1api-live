import type { RaceApiResponse } from "@f1api/sdk"

export const checkSprint = (
  raceInfo: RaceApiResponse | undefined
): boolean | undefined => {
  const haveSprint = raceInfo?.race.some(
    (race) => race.schedule.sprintRace?.date
  )
  return haveSprint
}

export function redirect(year: number): string {
  const currentYear = new Date().getFullYear()

  return year === currentYear ? `/current` : `/${year}`
}

export const formatDate = (dateString: string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const [year, month, day] = dateString.split("-")
  const monthIndex = parseInt(month, 10) - 1

  return `${parseInt(day, 10)} ${months[monthIndex]} ${year}`
}
