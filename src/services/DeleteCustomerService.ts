import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}
class DeleteCustomerService { 
  async execute({ id }: DeleteCustomerProps) {

    if (!id) {
      throw new Error('Erro: Solicitação inválida');
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    if (!findCustomer) {
      throw new Error('Erro: Cliente não encontrado');
    }

    await prismaClient.customer.delete({
      where: {
        id: id
      }
    });

    return { message: "Cliente deletado com sucesso" }
  }
}

export { DeleteCustomerService }