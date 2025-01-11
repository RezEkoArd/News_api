"use client"
import Swal from "sweetalert2"
import { deleteContent } from "../lib/action"
import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FC } from "react"

 

interface DeleteCategoryPageProps {
    id: number
}


const DeleteContent: FC<DeleteCategoryPageProps> = ({id}) => {
    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'apakah Anda yakin?',
            text: "Kategori ini akan dihapus secara permanent!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Silahkan dihapus',
        });

        if (result.isConfirmed) {
            try {
                await deleteContent(id)
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "kategori berhasil dihapus",
                    toast: true,
                    showConfirmButton: false,
                    timer: 1500
                });

                window.location.reload();
            } catch (error: any) {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: error.message,
                    toast: true,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <Button size={"sm"} variant="destructive" onClick={handleDelete}>
            <Trash className="mr-2 h-4 w-4" />
            Hapus
        </Button>
    )
}

export default DeleteContent;