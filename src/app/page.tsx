import { OTPField } from "@/ui/components"

export default function Home() {
	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<OTPField.Root length={6}>
				<OTPField.Input/>
				<OTPField.Input/>
				<OTPField.Input/>

				<OTPField.Separator/>

				<OTPField.Input/>
				<OTPField.Input/>
				<OTPField.Input/>
			</OTPField.Root>
		</div>
	)
}