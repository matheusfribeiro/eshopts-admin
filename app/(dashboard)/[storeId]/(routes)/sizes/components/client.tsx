"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { SizeColumn, columns } from "./columns"
import { ApiList } from "@/components/ui/api-list"

interface SizesClientProps {
  data: SizeColumn[]
}

export const SizesClient: React.FC<SizesClientProps> = ({
  data
}) => {
  const params = useParams()
  const router = useRouter()


  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Tamanhos (${data.length})`}
          description="Gerencie tamanhos para sua loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for sizes" />
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  )
}