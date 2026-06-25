import { mockContent, calculateDynamicScore } from '@/lib/mockData'
import { Content } from '@/types/database'

export class PublicationService {
  static async getAllPublications(): Promise<Content[]> {
    return [...mockContent]
      .filter(item => item.is_active)
      .sort((a, b) => calculateDynamicScore(b) - calculateDynamicScore(a)) as Content[]
  }
}
