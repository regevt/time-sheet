export default `<tbody class="tbody">
  <tr class="tr" style="text-align: right">
    <td class="td" style="text-align: left; word-break: break-word; max-width: 0; word-wrap: break-word">{type}</td>
    <td class="td" style="text-align: left; font-size: 13px; color: #888; word-break: break-word; max-width: 0; word-wrap: break-word">{description}</td>
    <td class="td table-align-right" style="white-space: nowrap">{rate}{currencySymbol}</td>
    <td class="td table-align-right">{hours}</td>
    <td class="td tax table-align-right">{tax}</td>
    <td class="td table-line-total" style="white-space: nowrap">{serviceTotal}{currencySymbol}</td>
  </tr>
</tbody>`;
