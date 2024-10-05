"use client"
interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
}

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Graph = () => {
    return (
        <main className="flex  gap-3 ">
            <Card className="w-[20%] bg-black text-white ">
                <CardHeader >
                    <CardTitle className="font-semibold text-[16px]">Running Task</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white font-semibold text-[32px]">65</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                    <CircularProgressBar percentage={75} size={70} strokeWidth={3} />
                    <div>
                        <h6>100</h6>
                        <h6 className="text-gray-400">Tasks</h6>
                    </div>
                </CardFooter>
            </Card>
            <div className="w-full bg-gray-100 p-6 rounded-[10px]">
                <h4 className="font-semibold text-xl pb-4">Activity</h4>
                <Component />
            </div>

        </main>
    )
}

export default Graph

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
    percentage,
    size = 100,
    strokeWidth = 8,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex justify-center items-center">
            <svg width={size} height={size}>
                <circle
                    stroke="" // Background circle (gray)
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    stroke="#ffff" // Foreground circle (progress color)
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                    strokeLinecap="round"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="20px"
                    fontWeight="bold"
                    fill="#ffff"
                    className="text-white"
                >
                    {`${percentage}%`}
                </text>
            </svg>
        </div>
    );
};



import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

function Component() {
    return (
        <Card className="w-full pt-5 bg-white">
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full h-[100px]">
                    <LineChart

                        height={400}
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="black"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
           
        </Card>
    );
}


