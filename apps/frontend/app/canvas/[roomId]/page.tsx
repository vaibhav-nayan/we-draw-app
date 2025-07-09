import { RoomCanvas } from "@/components/RoomCanvas";

export default async function PreCanvas ({
    params
}: {params: Promise<{roomId: string}>}) {

    const roomId = (await params).roomId;
    return (
        <RoomCanvas roomId={roomId} />
    )
}