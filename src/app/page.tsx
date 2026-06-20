import { Button, ButtonGroup } from "@/ui/components"

export default function Home() {
	return (
		<div className="p-4 w-full sm:w-lg h-dvh mx-auto flex flex-col gap-4 items-center justify-center">
			<ButtonGroup orientation="horizontal" variant="outline">
				<Button>Button 1</Button>
				<Button>Button 2</Button>
				<Button>Button 3</Button>
			</ButtonGroup>
		</div>
	)
}