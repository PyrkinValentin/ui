import type { AlertStatus } from "./alert.types"

export const computeAlertRole = (status: AlertStatus) => {
	return (status === "warning" || status === "danger")
		? "alert"
		: "status"
}