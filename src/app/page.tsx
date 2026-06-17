import { Button, Chip } from "@/ui/components"
import { Clock, Check, X, ChevronDown, Info } from "lucide-react"

export default function Home() {
	return (
		<div className="w-full sm:w-lg mt-75 h-90 flex flex-col gap-2 mx-auto">
			<div className="flex flex-wrap items-center gap-3">
				<Chip>Default</Chip>
				<Chip color="info">Info</Chip>
				<Chip color="success">Success</Chip>
				<Chip color="warning">Warning</Chip>
				<Chip color="error">Error</Chip>
			</div>

			<div className="flex flex-wrap items-center gap-3">
				<Chip>
					<Info/> Information
				</Chip>
				<Chip color="success">
					<Check/> Completed
				</Chip>
				<Chip color="warning">
					<Clock/> Pending
				</Chip>
				<Chip color="error">
					<X/> Failed
				</Chip>
				<Chip color="info">
					Label <ChevronDown/>
				</Chip>
			</div>

			<Button size="sm" variant="outline">
				Users <Chip color="warning" className="-mr-2">+35</Chip>
			</Button>
		</div>
	)
}