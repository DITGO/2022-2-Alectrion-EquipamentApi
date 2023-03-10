import { EquipmentBrand } from '../../domain/entities/brand'
import { ScreenType } from '../../domain/entities/equipamentEnum/screenType'
import { Status } from '../../domain/entities/equipamentEnum/status'
import { StorageType } from '../../domain/entities/equipamentEnum/storageType'
import { Unit } from '../../domain/entities/unit'

export type EditPayload = {
  situacao?: Status

  model?: string

  description?: string

  initialUseDate?: Date

  screenSize?: string

  invoiceNumber?: string

  power?: string

  screenType?: ScreenType

  processor?: string

  storageType?: StorageType

  storageAmount?: string

  brand?: EquipmentBrand

  acquisition?: EquipmentBrand

  ram_size?: string

  unit?: Unit
}

export interface UpdateEquipmentRepository {
  updateEquipment(equipmentId: string, editPayload: EditPayload): Promise<void>
}
