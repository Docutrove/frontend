// utils/replaceDynamicSections.ts

export const replaceDynamicSectionsInPreview = (html: string): string => {
  try {
    // Replace all dynamic sections with empty string and remove any extra spaces left behind
    html = html
      .replace(/#Dynamic (.*?)#([\s\S]*?)\\Dynamic\\/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    // Replace all placeholders with "______"
    html = html.replace(/{{(.*?)}}/g, '______')

    return html
  } catch (error) {
    console.error('Error in replaceDynamicSections:', error)
    return ''
  }
}
